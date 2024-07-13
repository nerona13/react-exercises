/* COMPONENTS and PROPS*/

// Example a1
// function Text() {
//     return <p>This is text</p>;
// }

// export default function Home() {
//     return (
//         <div>
//             <Text />
//             <Text />
//             <Text />
//         </div>
//     )
// }

// // Example 1b
// function Text({ content, strong }) {
//   // 'Text' is a component, 'content' and  'strong' are prop
//   if (strong) {
//     return <strong>{content}</strong>; // function Text is a component
//   }
//   return <p>{content}</p>; // function Text is a component
// }

// // anything that is enclosed in a bracket with small case is a regular HTML tag and anything that is enclosed in a bracket with capital case is a component
// export default function Home() {// Home is a component
//   return <div>
//     <Text content='hello world' strong={false}/>
//     <Text content='my name is' strong={true}/>
//     <Text content='Hector' strong={false}/>
//   </div>
// }

// Example 2 - importing a component from another file
// reading a component in a separate file

// import { Post } from "@/components/Post"; // use this code  when importing a file from different directory with only "export function Post" and @ is an alias for the src directory

// import Post from "@/components/Post"; // curly braces is now removed with only the word 'Post' or any other word you can use but from the other file it should be 'export default function Post......)

// export default function Home() {
//   return (
//     <div>
//       <Post
//         title="Hector is the bestman"
//         author="Hector Nerona"
//         content="This is my first post!"
//       />
//       <br />
//       <Post
//         title="Hello World"
//         author="Hector Nerona"
//         content="This is my second post!"
//       />
//     </div>
//   );
// }

// // Example 3 - importing a component Post from another file with 4th props 'following'

// import Post from "@/components/Post"; // import the Post component. @ is an alias for the src directory

// export default function Home() {
//   return (
//     <div>
//       <Post
//         title="Hector is the best"
//         author="Hector"
//         content="This is my first post!"
//         folllowing={false}
//       />
//       <br />
//       <Post
//         title="Hello World"
//         author="Hector"
//         content="This is my first post!"
//         following={true}
//       />
//     </div>
//   );
// }


// ......................
// // using map to render multiple posts
// import Post from "@/components/Post"; // import the Post component. @ is an alias for the src directory

// export default function Home() {
//   const posts = [
//     {
//       title: "My Post",
//       author: "Hector Nerona",
//       content: "I am the best react developer",
//       following: false,
//     },
//     {
//       title: "My Post 2",
//       author: "Maan Nerona",
//       content: "Just testing things out",
//       following: true,
//     },
//     {
//       title: "My Post 3",
//       author: "Hector Leoncio",
//       content: "This is another post",
//       following: false,
//     },
//   ];

//   return (
//     <>
//       {posts.map((x, idx) => {
//         return <Post {...x} key={idx /* + Math.random()*/} />; // Math.random is added(?) to have a unique index
//       })}
//     </>
//   );
// };

// // <> </> is a fragment, it is used to wrap multiple elements in a single parent element. It is a shorthand for React.Fragment. It is used to return multiple elements from a component without adding an extra node to the <DOM
// // {...content} is a spread operator that passes all the properties of the content object as props to the Post component


// ..............................
// Lesson : useState and useEffect
// "use client"; // this is a prompt that tells Vite to use the client-side version of React
// import Post from "@/components/Post"; // import the Post component. @ is an alias for the src directory
// import { useState } from "react"; // import the useState hook from React

// export default function Home() {
//     const [count, setCount] = useState(0); // set the initial value of count to 0

//     function onCount() {
//         setCount(count + 1); // increment the count by 1
//     }

//     return (
//         <>
//             <p>{count}</p>
//             <button onClick={onCount}>Count Up!</button>
//         </>
//     )
// }


// xxxxxxxxxxxxx//
// create a new Post for controlled component

"use client"; // this is a pragma that tells Vite to use the client-side version of React
import Post from "@/components/Post"; // import the Post component. @ is an alias for the src directory
import { useEffect, useState } from "react"; // import the useState hook from React

export default function Home() {
    const [content, setContent] = useState(""); // set the initial value of content to an empty string
    const [author, setAuthor] = useState(""); // set the initial value of author to an empty string
    const [title, setTitle] = useState(""); // set the initial value of title to an empty string
    const [posts, setPosts] = useState([]);// set the initial value of posts to an empty array

    // useEffect(() => {
    //     console.log("run");
    // }, [content]); // run the useEffect hook when the content state changes

    // another example of useEffect
    useEffect(() => {
        if (content.length >= 10) alert("Content is too long!"); // display an alert if the content length is greater than or equal to 10
    }, [content]);

    function addPost() {
        const newPost = {
            title: title,
            author: author,
            content: content,
            following: false,
        }; // create a newPost object with the title, author, content, and following properties

        setPosts([...posts, newPost]); // add the newPost object to the posts array
        setContent(""); // reset the content state to an empty string
        setAuthor(""); // reset the content state to an empty string
        setTitle(""); // reset the content state to an empty string

    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title" // set the value of the input field to the title state and update the title state when the input field changes
                />
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                />
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className="posts">
                {posts.map((post, idx) => (
                    <Post {...post} key={idx + Math.random()} />
                ))}
            </div>
        </div>
    );
}

// "use client"; // this is a pragma that tells Vite to use the client-side version of React
// import Post from "@/components/Post"; // import the Post component. @ is an alias for the src directory
// import { useEffect, useState } from "react"; // import the useState hook from React

// export default function Home() {
//     const [content, setContent] = useState(""); // set the initial value of content to an empty string
//     const [author, setAuthor] = useState(""); // set the initial value of author to an empty string
//     const [title, setTitle] = useState(""); // set the initial value of title to an empty string
//     const [posts, setPosts] = useState([]);// set the initial value of posts to an empty array

//     function addPost() {
//         const newPost = {
//             title: title,
//             author: author,
//             content: content,
//             following: false,
//         }; // create a newPost object with the title, author, content, and following properties

//         setPosts([...posts, newPost]); // add the newPost object to the posts array
//         setContent(""); // reset the content state to an empty string
//         setAuthor(""); // reset the content state to an empty string
//         setTitle(""); // reset the content state to an empty string

//     }

//     return (
//         <div>
//             <div>
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Title" // set the value of the input field to the title state and update the title state when the input field changes
//                 />
//                 <input
//                     type="text"
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                     placeholder="Content"
//                 />
//                 <input
//                     type="text"
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value)}
//                     placeholder="Author"
//                 />
//                 <button onClick={addPost}>Add Post</button>
//             </div>
//             <div className="posts">
//                 {posts.map((post, idx) => (
//                     <Post {...post} key={idx + Math.random()} />
//                 ))}
//             </div>
//         </div>
//     );
// }
