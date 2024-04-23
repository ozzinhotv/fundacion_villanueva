import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="mt-5 m-5">
		<div className="d-flex grid">
			<div className="homeImg g-col-6">
				<p>
					<img src={rigoImage} />
				</p>
			</div>
			<div className="g-col-6">
				<h1 className="bigTitle lead"> Fundación Villanueva</h1>
				<div className="homeDescription lead">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis pulvinar massa, vestibulum cursus sapien. Mauris non tellus sem. Nunc eget arcu in ligula venenatis tincidunt. Curabitur varius turpis nec ex ultricies porta. Nunc blandit quam sit amet ante imperdiet, non finibus nisl condimentum. Nam at ante sodales, gravida ipsum nec, imperdiet libero. Sed scelerisque nisi non neque aliquet facilisis sit amet et tortor. Mauris dictum, leo vel bibendum commodo, lorem nisi hendrerit magna, eu aliquet risus erat in ante. Cras tincidunt ut tellus ac ornare. Curabitur scelerisque lectus vel laoreet volutpat. Ut sed tincidunt metus. Aliquam lobortis purus sit amet dui dictum, id tristique massa condimentum. Ut congue vel nibh vel lobortis. Proin at quam dignissim, suscipit tellus a, ultricies lectus. Proin auctor, ante vitae malesuada pretium, mi leo maximus lorem, vel ultricies enim odio at urna. Morbi ac arcu tincidunt, tincidunt erat in, fermentum sem.
					Aliquam fermentum ligula at sollicitudin ullamcorper.
					</p>
				</div>
			</div>
		</div>
	</div>
);
