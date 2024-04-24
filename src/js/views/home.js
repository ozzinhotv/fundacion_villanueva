import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
    <div className="mt-5 m-5">
        <div className="grid">
            <div className="homeImg">
                <p>
                    <img src={rigoImage} alt="Rigo Baby" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                </p>
            </div>
            <div>
                <h1 className="bigTitle lead"> Fundación Villanueva</h1>
                <div className="homeDescription lead">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis pulvinar massa, vestibulum cursus sapien. Mauris non tellus sem. Nunc eget arcu in ligula venenatis tincidunt. Curabitur varius turpis nec ex ultricies porta. Nunc blandit quam sit amet ante imperdiet, non finibus nisl condimentum. Nam at ante sodales, gravida ipsum nec, imperdiet libero. Sed scelerisque nisi non neque aliquet facilisis sit amet et tortor. Mauris dictum, leo vel bibendum commodo, lorem nisi hendrerit magna, eu aliquet risus erat in ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis pulvinar massa, vestibulum cursus sapien. Mauris non tellus sem. Nunc eget arcu in ligula venenatis tincidunt. Curabitur varius turpis nec ex ultricies porta. Nunc blandit quam sit amet ante imperdiet, non finibus nisl condimentum. Nam at ante sodales, gravida ipsum nec, imperdiet libero. Sed scelerisque nisi non neque aliquet facilisis sit amet et tortor. Mauris dictum, leo vel bibendum commodo, lorem nisi hendrerit magna, eu aliquet risus erat in ante. Nunc blandit quam sit amet ante imperdiet, non finibus nisl condimentum.
                    </p>
                </div>
            </div>
        </div>
    </div>
);
