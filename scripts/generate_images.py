import asyncio
import base64
import os
import sys

from dotenv import load_dotenv

load_dotenv("/app/backend/.env")

from emergentintegrations.llm.chat import LlmChat, UserMessage

OUT_DIR = "/app/frontend/public/assets"
MODEL = "gemini-3.1-flash-image-preview"

STYLE = (
    "Documentary style photograph, bright even industrial lighting, wide depth of field, "
    "photorealistic, no color filters, no tints, not staged or stock-like, clean modern facility. "
    "Any people visible wear correct PPE (safety helmet, hi-vis vest, gloves)."
)

IMAGES = [
    (
        "hero-facility.png",
        "Ultra-wide 16:9 photograph inside India's largest textile recovery facility: long rows of neatly "
        "compressed bales of sorted white and coloured polyester fabric waste, a conveyor pre-processing line, "
        "polished concrete floor, high bay ceiling with skylights, two workers in PPE inspecting bales in the "
        "mid-distance. Industrial cleanliness theme. " + STYLE,
    ),
    (
        "jv-industrial.png",
        "4:3 photograph of a high-volume industrial baling machine compressing polyester textile waste into "
        "dense transport-ready bales inside a clean recycling plant, deep blue machinery, bright even light. " + STYLE,
    ),
    (
        "jv-tech.png",
        "4:3 photograph of an automated optical sorting line with hyperspectral camera scanners mounted above a "
        "conveyor carrying mixed textile fabric pieces, an engineer in PPE holding a tablet showing a material "
        "analysis dashboard beside the line. Technology in action. " + STYLE,
    ),
    (
        "jv-collab.png",
        "4:3 photograph of four professionals, two in PPE workwear and two in business attire, standing on a "
        "recycling facility floor reviewing documents together, bales of sorted textiles softly out of focus "
        "behind them, collaborative atmosphere. " + STYLE,
    ),
    (
        "product-mechanical.png",
        "4:3 photograph of neatly stacked bales of pure white 100 percent polyester fabric feedstock beside a "
        "separate stack of coloured polyester bales, segregated streams, clean warehouse, crisp detail. " + STYLE,
    ),
    (
        "product-chemical.png",
        "4:3 photograph of shredded polyester-cotton blend textile feedstock: uniform shredded fabric flakes in "
        "large white bulk bags, white stream and coloured stream side by side, industrial quality-control "
        "setting, bright even light. " + STYLE,
    ),
]


async def generate_one(name: str, prompt: str) -> None:
    path = os.path.join(OUT_DIR, name)
    if os.path.exists(path) and os.path.getsize(path) > 50000:
        print(f"SKIP {name} (exists)")
        return
    chat = LlmChat(
        api_key=os.environ["EMERGENT_LLM_KEY"],
        session_id=f"img-{name}",
        system_message="You generate photorealistic images exactly as described.",
    )
    chat.with_model("gemini", MODEL).with_params(modalities=["image", "text"])
    text, images = await chat.send_message_multimodal_response(UserMessage(text=prompt))
    if images:
        with open(path, "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print(f"OK {name} ({os.path.getsize(path)} bytes)")
    else:
        print(f"FAIL {name}: no image returned. Text: {str(text)[:120]}")


async def main() -> None:
    for name, prompt in IMAGES:
        try:
            await generate_one(name, prompt)
        except Exception as e:
            print(f"ERROR {name}: {e}")
    print("DONE")


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
