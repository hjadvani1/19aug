import { Router, Request, Response } from "express";
import { js } from '../controllers/controller'

const router: Router = Router();

// router.get('/', (req:Request, res:Response)=>
// {   

//     res.send('just checking ')
//     console.log('just checking');


// })
router.get('/string', js.stringmethod)
router.get('/number', js.numbermethod)
router.get('/array', js.arraymethod)
router.get('/axiosgetposts',js.getposts)
router.get('/axiosgetpost/:id',js.getpost)
router.post('/axiospost/:id',js.updatePost);
router.post('/axiosdelete/:id',js.deletePost);
router.post('/axiosposts',js.addPost);
router.get('/getpromise',js.promise)



router.get('/getset', (req: Request, res: Response) => {
    class javascript1 {
        private _age: number;
        private first_name: string;
        private last_name: string;

        get age() {
            return this._age;
        }

        set age(theAge: number) {
            if (theAge <= 0 || theAge >= 100) {
                throw new Error('the age is invalid')
            }
        }

        public get firstName() {
            return this.first_name;
        }

        public set firstName(theFirstName: string) {
            if (!theFirstName) {
                throw new Error('Invalid first name.');
            }
            this.first_name = theFirstName;
        }

        public get lastName() {
            return this.last_name;
        }

        public set lastName(theLastName: string) {
            if (!theLastName) {
                throw new Error('Invalid last name.');
            }
            this.last_name = theLastName;
        }


        getFullName(): string {
            return `${this.first_name} ${this.last_name}`;
        }

        set fullName(name: string) {
            let parts = name.split(' ');
            if (parts.length != 2) {
                throw new Error('Invalid name format: first last');
            }
            this.first_name = parts[0];
            this.last_name = parts[1];
        }

    }

    let js1 = new javascript1();

    js1.age = 15;
    js1.fullName = 'eren yeager'
    console.log(js1.age);

    res.send(`person age is ${js1.age}`)

})


export default router;