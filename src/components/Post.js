// This is a functional component that takes in props and returns JSX.
// The Post component is used in the Home component.
// The Post component takes in three props: title, author, and content.
// The Post component returns a div element with an h1 element for the title, a p element for the author, and another p element for the content.

export default function Post({ title, author, content }) {
    return (
        <div>
        <h1>{title}</h1>
        <p>By: {author}</p>
        <p>{content}</p>
        </div>
    );
}



// // Path: app/src/components/Post.js
// // conditional rendering
// import "./post.css"; // import the CSS file for the Post component

// export default function Post({ title, author, content, following }) {
//     const button = !following ? (
//         <button>Follow</button>
//     ) : (
//         <button>Unfollow</button>
//     );

//     return (
//         <div className="card">
//             <h1>{title}</h1>
//             <h3>By: {author}</h3>
//             {button}
//             <p>{content}</p>
//         </div>
//     );
// }




// // Example for controlled component (new POst)
// import "./post.css"; // import the CSS file for the Post component

// export default function Post({ title, author, content }) {
//     return (
//         <div className="card">
//             <h1>{title}</h1>
//             <h3>By: {author}</h3>
//             <p>{content}</p>
//         </div>
//     );
// }


// The Post component now takes in a fourth prop called following.
// The Post component conditionally renders a button element based on the value of the following prop.
// {following ? <button>Unfollow</button> : <button>Follow</button>} // this is a ternary operator that checks if the following prop is true or false and renders the appropriate button <element className=""></element>
// <button>{following ? "Unfollow" : "Follow"</button>
// {following && <button>Unfollow</button>} // this is a logical AND operator that checks if the following prop is true and renders the button <element></element>    