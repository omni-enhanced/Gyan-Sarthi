CREATE TABLE ai_logs (
    ai_log_id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),

    question_id UUID REFERENCES questions(question_id),

    ai_source VARCHAR(50),
    -- internal | gemini | openai | claude | grok | personal_api

    prompt TEXT,
    response TEXT,

    mode VARCHAR(20),
    -- practice only

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);