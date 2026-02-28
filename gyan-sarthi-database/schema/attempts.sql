CREATE TABLE attempts (
    attempt_id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    question_id UUID REFERENCES questions(question_id),

    selected_answer TEXT,
    is_correct BOOLEAN,

    mode VARCHAR(20),
    -- practice | exam

    time_taken_seconds INT,

    used_ai BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);