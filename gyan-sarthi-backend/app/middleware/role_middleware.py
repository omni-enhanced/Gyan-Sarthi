from fastapi import Depends, HTTPException
from app.core.security import get_current_user

def role_required(role: str):
    def checker(user=Depends(get_current_user)):
        if user["role"] != role:
            raise HTTPException(status_code=403, detail="Access denied")
        return user
    return checker