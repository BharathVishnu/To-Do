import React from "react";
import TodoApp from "./ToDoApp";

function Box(){
    return(
        <div className="mt-40 font-indie h-80 w-72 md:h-96 md:w-[50%]">
            <div className="text-2xl md:text-4xl text-white text-center mt-5">
                TO DO
            </div>
            <TodoApp/>

        </div>
    )
}


export default Box;