import { RequestHandler } from "express";
import Mexp from "math-expression-evaluator";

const mexp = new Mexp();

interface EvaluateExpressionBody {
    expression: string
}

export const evaluate: RequestHandler<unknown, unknown, EvaluateExpressionBody, unknown> = async (req, res, next) => {
    try {

        const expression = req.body.expression;
        
        const lexed = mexp.lex(expression);
        const postfixed = mexp.toPostfix(lexed);
        const result = mexp.postfixEval(postfixed);

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(406).json(error);
    }
};
