import {Request, Response} from 'express'
import { facts } from '../data/facts';

export function getRandomFact(_req: Request, res: Response):void {
    const randomFact = facts[Math.floor(Math.random() * facts.length)]
    res.json(randomFact);
}

export function getFacts(_req: Request, res: Response):void {
    res.json(facts);
}

export function addFact(req: Request, res: Response):void {

    if(!req.body) {
        res.status(400).json({ error: "Tienes que especificar un fact!" });
        return;
    }

    const {fact} = req.body;

    if(!fact || typeof fact !== "string"){
        res.status(400).json({ error: "El fact tiene que ser un string válido!" });
        return;
    }

    facts.push(fact);
    res.status(201).json({
        message: "El fact se ha añadido correctamente"
    })    
}