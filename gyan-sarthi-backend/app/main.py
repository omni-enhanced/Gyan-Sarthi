from fastapi import FastAPI
from app.core.database import Base, engine
from app.routes import auth_routes, question_routes, attempt_routes, ai_routes

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_routes.router)
app.include_router(question_routes.router)
app.include_router(attempt_routes.router)
app.include_router(ai_routes.router)