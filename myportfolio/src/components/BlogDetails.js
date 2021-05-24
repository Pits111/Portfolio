
const BlogDetails = ({ routeProps }) => {
        console.log(routeProps);

    const blogContent = [
        {
            title: "Research",
            text: "Lorem Ipsum",
            source: "Link",
            id: 1,
        },
        {
            title: "Artificial Intelligence",
            text: "Lorem Ipsum",
            source: "Link",
            id: 2,
        },
        {
            title: "Technology",
            text: "Lorem Ipsum",
            source: "Link",
            id: 3,
        },
        {
            title: "Digital Health",
            text: "Lorem Ipsum",
            source: "Link",
            id: 4, 
        },
    ]

    const foundMatch = blogContent.find((blogCategory) => blogCategory.title === routeProps.match.params.blogtitle)
        console.log(foundMatch);

    return (
        <div>
           <h3>Sorry! Page Under Construction</h3>
           <p>Content Coming Soon...</p>
        </div>
    );
};

export default BlogDetails; 