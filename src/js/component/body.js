import React from "react";

const Body = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="col-md-3">
					<div className="row">
						<div className="card" style="width: 18rem;">
							<img
								className="card-img-top"
								src="..."
								alt="Card image cap"
							/>
							<div className="card-body">
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Body;
