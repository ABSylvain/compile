import {Todo} from './todo';
import {User} from './User';
import * as express from 'express';

const todo = new Todo();
const user = new User();
/*
On utilise un Router pour regroupe toutes les routes
d'un type particulier, ici, notre router regroupera 
les routes liées au Todo's
*/
export const router = express.Router();

//Route permettant de récupérer les todo
router.get('/', (req,res) => res.json(todo.lister()) );
//Route permettant d'ajouter un todo
router.post('/', (req, res) => {
    let nouveau = req.body.nouveau;
    todo.ajouter(nouveau);
    res.end('todo ajouté');
});
//Route peremettant de supprimer un todo
router.delete('/:suppr', (req, res) => {
    let suppr = req.params.suppr;
    todo.supprimer(suppr);
    res.end('todo supprimé');
});
//route ajout user
router.post('/', (req, res) =>{
    let name = req.body.user;
    let mdp = req.body.mdp;
    user.add(name, mdp);
})
// route display list-user
router.get('/', (req,res) =>{
    res.json(user.display());
})
// route sppr user
router.delete('/:suppr',(req, res) => {
    let suppr = req.params.suppr;
    user.delete(suppr);
    res.end('user supprimé');
});