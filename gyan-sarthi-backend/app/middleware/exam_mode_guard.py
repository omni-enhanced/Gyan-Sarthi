from fastapi import HTTPException

def block_ai_in_exam(mode: str):
    if mode == "exam":
        raise HTTPException(status_code=403, detail="AI not allowed in exam mode")