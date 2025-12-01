"use client"
import { useEffect, useState } from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

import type { TodoData } from "@/types/todoType";

const baseUrl = "http://localhost:3000/api/todo"
export default function TodoList() {
    const [todos, setTodos] = useState<TodoData[]>([]);
    const [todoCnt, setTodoCnt] = useState(0);
    const [todoInComp, setTodoInComp] = useState(0);
    const [todoComp, setTodoComp] = useState(0);
    const [todoList, setTodoList] = useState<React.ReactElement[]>();

    const getData = async () => {
        const url = `${baseUrl}`;
        try {
            const resp = await fetch(url, { method: 'GET' });
            const data = await resp.json();
            setTodos(data);

        } catch (error) {
            console.log(error);
        }
    };

    // const getDataById = async (id: number) => {
    //     const url = `${baseUrl}?id=${id}`;
    //     let data: TodoData | null = null;
    //     try {
    //         const resp = await fetch(url, { method: 'GET' });
    //         data = await resp.json();
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     return data;
    // };

    const postData = async (newData: TodoData): Promise<number> => {
        const id = Number(new Date());
        const url = baseUrl;

        try {
            const resp = await fetch(url,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: id, text: newData.text, completed: newData.completed })
                }
            );
            await getData();
            // const data = await resp.json();
            // setTodos(data);
        } catch (error) {
            console.log(error);
            return 0;
        }

        return 1;
    };

    const putTodo = async (newData: TodoData) => {

        const url = `${baseUrl}?id=${newData.id}`;

        try {
            const resp = await fetch(`${url}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ text: newData.text, completed: newData.completed })
            });
            await getData();
        } catch (error) {
            console.log(error);
        }

    };


    const patchTodo = async (newData: TodoData) => {

        const url = `${baseUrl}?id=${newData.id}`;

        try {
            const resp = await fetch(`${url}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ text: newData.text, completed: newData.completed })
            });
            await getData();
        } catch (error) {
            console.log(error);
        }


    };

    const deleteTodo = async (newData: TodoData) => {
        const url = `${baseUrl}?id=${newData.id}`;

        try {
            const resp = await fetch(url, {
                method: 'DELETE',
            });
            await getData();
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setTodoCnt(todos.length);
        setTodoComp(todos.filter(el => el.completed == true).length);
        setTodoInComp(todos.filter(el => el.completed == false).length);

        setTodoList(
            todos.map((item) =>
                <TodoItem key={item.id} curData={item} handleEdit={patchTodo} handleDelete={deleteTodo} />)
        );
        console.log("겟");
    }, [todos]);

    return (
        <div className="mx-auto w-7/10 flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold mt-10">할일목록(Supabase)</h1>
            <div className="bg-purple-200 rounded w-full h-100px p-5 text-rose-950">
                전체 : {todoCnt} 개 | 완료 : {todoComp} 개 | 미완료 : {todoInComp} 개
            </div>
            <TodoInput handleSave={postData} />
            <div className="w-full flex flex-col justify-center items-center gap-2">
                {todoList}
            </div>
        </div>
    )
}
