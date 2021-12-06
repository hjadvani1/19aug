import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface post {
    userId: Number;
    id: Number;
    title: string;
    body: string;
}

class javascript {
    constructor() {
    }

    stringmethod = async (req: Request, res: Response) => {

        const name: string = "webelight"
        res.send(name);
        // res.status(200).send(name.length);
        console.log(name.length);
        console.log(name.toUpperCase());
        console.log(name.toLowerCase());
        console.log(name.trim());

        let anime = "attackontitan"
        console.log(anime.includes('titan'));
    }

    numbermethod = async (req: Request, res: Response) => {

        let number: Number = 145.789;
        res.send(number.toFixed())
        console.log(number.toFixed());

    }

    arraymethod = async (req: Request, res: Response) => {
        let arr: string[];
        arr = ['eren', 'mikasa', 'erwin'];
        // arr.pop();
        // arr.push('levi')
        // console.log(arr.shift());
        // console.log(arr.unshift('levi'));
        // console.log(arr.splice(1,2));
        // console.log(arr.length);

        //foreach
        arr.forEach((item, index) => {
            let num: number = index + 1;
            console.log(`${num}. ${item}`);

        })

        //for
        for (let i: number = 0; i < arr.length; i++) {

            let number: number = i + 1;
            const arra = arr[i]
            console.log(`${number}.${arra}`);

            // console.log(arr[i])

        }

        //searching arrays
        console.log(arr.indexOf('mikasa'));

        interface noteitem {
            title: string;
            body: string;
            watch?: boolean
        };

        // interface noteitems extends Array<noteitem> { }

        const note: Array<noteitem> = [
            {
                title: 'attack on titan',
                body: 'best anime ever',
                watch: true
            },
            {
                title: 'naruto',
                body: 'best character development',
                watch: true

            },
            {
                title: 'one piece',
                body: 'best world develop',
                watch: false
            }
        ]

        const notes: any = async (notes: any, noteitem: string) => {

            const index: number = notes.findIndex((note: any, index: number) => {
                // console.log(note); 
                return note.title === noteitem

            })
            return notes[index]
        }

        const anime = notes(note, 'naruto')
        console.log(anime);

        // const index: number = note.findIndex((note, index) => {
        //     console.log(note);  
        //     return note.title === 'naruto'

        // })
        // console.log(index);


        //filetering in array

        const filteredanime = note.filter((note: any, index: any) => {

            const titlemacth: string = note.title.includes('attack');
            const bodymatch: string = note.body.includes('ever');
            return titlemacth || bodymatch;

        })

        console.log(filteredanime);

        const getanime = function (notes: any) {
            return notes.filter((note: any) => {
                return note.watch;
            })
        }

        console.log(getanime(note));



        //sorting array

        const sortanime = (notes: any) => {
            notes.sort((x: any, y: any) => {
                if (x.title < y.title) {
                    return -1;
                }
                else if (y.title < x.title) {
                    return 1;
                }
                else {
                    return 0;
                }
            })
        }

        sortanime(note)
        console.log(note);
        res.send(arr);

    }

    //fetch api 
    getposts = async (req: Request, res: Response, next: NextFunction) => {
        let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        let posts: [post] = result.data;
        return res.status(200).json({
            message: posts
        })
    }

    getpost = async (req: Request, res: Response, next: NextFunction) => {
        let id: string = req.params.id;

        let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        let post: post = result.data;

        return res.status(200).json({
            message: post
        })
    }

    updatePost = async (req: Request, res: Response, next: NextFunction) => {
        let id: string = req.params.id;
        let title: string = req.body.title ?? null;
        let body: string = req.body.body ?? null;
        let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            ...(title && { title }),
            ...(body && { body })
        });
        return res.status(200).json({
            message: response.data
        });
    };

    deletePost = async (req: Request, res: Response, next: NextFunction) => {
        let id: string = req.params.id;
        let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return res.status(200).json({
            message: 'post deleted successfully'
        });
    };

    addPost = async (req: Request, res: Response, next: NextFunction) => {
        let title: string = req.body.title;
        let body: string = req.body.body;
        let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
            title,
            body
        });
        return res.status(200).json({
            message: response.data
        });
    };

    promise = async (req: Request, res: Response) => {
        // let p = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(10);
        //     }, 1 * 100);
        // });

        // p.then((result: any) => {
        //     console.log(result);
        //     return result * 2;
        // }).then((result: any) => {
        //     console.log(result);
        //     return result * 3;

        // }).then((result: any) => {
        //     console.log(result);
        //     return result * 3;
        // });

        // const one = new Promise<string>((resolve, reject) => { });
        // one.then(value => {
        //     console.log('resolved', value);
        // });
        // one.catch(error => {
        //     console.log('rejected', error);
        // });

        const one = new Promise<string>((resolve, reject) => {
            resolve('Hello');
        });
        const two: any = one.then(value => { });
        two.then((value: any) => {
            console.log('Hi', value);
        });
        two.catch((error: any) => {
            console.log('Oops', error);
        });
        console.log(one === two);

        // interface Employee {
        //     id: number
        //     employee_name: string
        //     employee_salary: number
        //     employee_age: number
        //     profile_image: string
        // }
        // const fetchEmployees = async () => {
        //     const api = ''
        //     try {
        //         const response = await fetch(api)
        //         const { data } = await response.json()
        //         return data
        //     } catch (error: any) {
        //         if (error) {
        //             return error.message
        //         }
        //     }
        // }
        // fetchEmployees();

    }


}



export const js = new javascript();
// export const js1 = new javascript()