import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";

function PostCardList() {
    const [posts, setPosts] = useState([]);

    // Array of different image URLs
    const imageUrls = [
        "https://i.pinimg.com/736x/96/91/28/9691288a3fadba6a8e6173d4eea20488.jpg",
        "https://i.pinimg.com/enabled_lo/564x/c2/af/8a/c2af8a512a6838bd82ee01bcbedc49dc.jpg",
        "https://i.pinimg.com/enabled_lo/736x/4f/62/d2/4f62d2bc39cb6092fe4dedb978c285c5.jpg",
        "https://i.pinimg.com/enabled_lo/564x/6b/79/9c/6b799c0b4833ef0f9cea9d1f415e5061.jpg",
        "https://i.pinimg.com/736x/a1/e0/07/a1e0079cef2bdcb59eeeb436bf80a9ec.jpg",
        "https://i.pinimg.com/736x/17/c3/57/17c357695e7b265dc9f71f0f2a717f39.jpg",
        "https://i.pinimg.com/enabled_lo/564x/36/2c/42/362c42666201cdbff2ceb6aca43cfa11.jpg",
        "https://i.pinimg.com/736x/fe/ef/92/feef926836fbc7130733bf83f74ac26f.jpg",
        "https://i.pinimg.com/enabled_lo/564x/2a/2e/75/2a2e75942ce0f06fa4943bf4f7af99ae.jpg",
        "https://i.pinimg.com/enabled_lo/736x/97/97/00/979700f294e6fff8a5ec705764541731.jpg",
        "https://i.pinimg.com/enabled_lo/736x/8d/43/61/8d4361295e48bf1abdf82afbe3908b84.jpg",
        "https://i.pinimg.com/enabled_lo/564x/a5/e2/55/a5e255b0fe8d64fd9178b912069c13c4.jpg",
        "https://i.pinimg.com/enabled_lo/564x/0c/32/97/0c3297028aec0e778bdcf94fa8728108.jpg",
        "https://i.pinimg.com/enabled_lo/564x/48/7a/54/487a543fc9893bac50158e3a60951968.jpg",
        "https://i.pinimg.com/enabled_lo/564x/57/30/2c/57302c0749f86843295d8c1d5759a814.jpg",
        "https://i.pinimg.com/736x/cf/2d/fc/cf2dfc22f063158f7a1459312bff8d34.jpg",
        "https://i.pinimg.com/enabled_lo/564x/48/6d/12/486d12bb37c2f539f9b4f2f69a7ab943.jpg",
        "https://i.pinimg.com/enabled_lo/564x/d3/7b/87/d37b87a689889eec1be049d2a1805b96.jpg",
        "https://i.pinimg.com/enabled_lo/564x/d8/c2/56/d8c256df0d1b3d0d40cb7494dc729e3a.jpg",
        "https://i.pinimg.com/enabled_lo/564x/29/87/d9/2987d9546d3ac34a07ab091cb04f0ddd.jpg",
        "https://i.pinimg.com/736x/e8/c8/80/e8c880f1deb4c6727ed06ecdaa4341a7.jpg",
    ];

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        posts.length === 0
            ? "Loading..."
            : posts.map((post, index) =>
                <PostCard
                    content={post.body}
                    // Cycle through the imageUrls array using index % imageUrls.length
                    image={imageUrls[index % imageUrls.length]}
                    authorFirstName={"John"}
                    key={post.id}
                />
            )
    );
}

export default PostCardList;
