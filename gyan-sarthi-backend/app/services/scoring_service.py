def calculate_readiness(is_correct: bool, current_score: float):
    if is_correct:
        return current_score + 1
    return max(current_score - 0.2, 0)