import { RequestHandler } from "express";
import Mexp from "math-expression-evaluator";

const mexp = new Mexp();

export const evaluate: RequestHandler = async (req, res, next) => {
    const expression = req.params.expression;

    const lexed = mexp.lex(expression);
    const postfixed = mexp.toPostfix(lexed);
    const result = mexp.postfixEval(postfixed);

    try {
        res.status(200).json(result);
    } catch (error) {
        res.status(406).json(error);
    }
};