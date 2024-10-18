import calculatorImg from '../../images/calculator.webp';
import toDoListImg from '../../images/toDoList.jpg'
import moviesImg from '../../images/movies.jpg';
import weatherAppImg from '../../images/weatherApp.jpg';
import dynamicTableImg from '../../images/Dynamic_table.jpg';
import resturantImg from '../../images/Resturant.jpg';
import tutorImg from '../../images/tutorHiring.jpg';



export interface tabDataType {
    id?: number,
    title: string,
    description: string,
    imagesrc: string,
}
export const firstTabData: Array<tabDataType> = [
    {
        id: 1,
        title: "Calculator",
        description: "An interactive calculator app built with React.js, capable of performing multiple arithmetic operations such as addition, subtraction, multiplication, and division.",
        imagesrc: calculatorImg
    },
    {
        id: 2,
        title: "To Do List",
        description: "A robust To-Do List app created using React.js, featuring functionalities to add, update, and delete tasks, helping users manage their daily activities efficiently.",
        imagesrc: toDoListImg
    },
    {
        id: 3,
        title: "Weather App",
        description: "A comprehensive Weather App developed with React.js, providing real-time weather updates for locations worldwide using a weather API integration.",
        imagesrc: weatherAppImg
    }
];

export const secondTabData: Array<tabDataType> = [
    {
        id: 1,
        title: "Tutor Hiring",
        description: "A responsive website for hiring tutors, developed using ASP.NET Core and Entity Framework. It features functionalities for tutor registration, profile management, and job listings.",
        imagesrc: tutorImg
    },
    {
        id: 2,
        title: "Restaurant Management",
        description: "A Restaurant Management System project created using C++, designed to handle restaurant operations such as order processing, table management, and billing efficiently.",
        imagesrc: resturantImg
    }
];

export const thirdTabData: Array<tabDataType> = [
    {
        id: 1,
        title: "Dynamic Table",
        description: "A dynamic web application built with JavaScript, allowing users to create tables with specified numbers of rows and columns, and insert data as needed. It offers a flexible way to manage and visualize tabular data.",
        imagesrc: dynamicTableImg
    },
    {
        id: 2,
        title: "Movie Design",
        description: "A visually appealing movie design interface created using React.js, showcasing a simple and elegant layout for displaying comprehensive movie information.",
        imagesrc: moviesImg
    }
];

