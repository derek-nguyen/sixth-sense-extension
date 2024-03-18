import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
openai_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=openai_key)


def summarize_text_gpt4(text:str) -> str:
    completion = client.chat.completions.create(
        model="gpt-4-0125-preview",
        temperature=0.0,
        messages=[
            {"role": "system", "content": "Summarize. Be concise."},
            {"role": "user", "content": text}
        ]
    )
    return completion.choices[0].message.content