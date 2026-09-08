import asyncio
import base64
import os
import sys

from dotenv import load_dotenv

load_dotenv("/app/backend/.env")

from emergentintegrations.llm.chat import LlmChat, UserMessage

PROMPT = (
    "Wide 16:10 photograph of a hyperspectral optical sorting machine: a scanning head with camera sensors "
    "and soft UV/IR lighting mounted above a conveyor belt carrying colourful polyester fabric pieces, inside a "
    "clean modern textile recovery facility. Bright even industrial lighting, wide depth of field, documentary "
    "style, photorealistic, no color filters or tints, no people."
)


async def main() -> None:
    chat = LlmChat(
        api_key=os.environ["EMERGENT_LLM_KEY"],
        session_id="img-tech-sorting",
        system_message="You generate photorealistic images exactly as described.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    text, images = await chat.send_message_multimodal_response(UserMessage(text=PROMPT))
    if images:
        path = "/app/frontend/public/assets/tech-sorting.png"
        with open(path, "wb") as f:
            f.write(base64.b64decode(images[0]["data"]))
        print(f"OK tech-sorting.png ({os.path.getsize(path)} bytes)")
    else:
        print("FAIL: no image", str(text)[:120])


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
