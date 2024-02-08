import React from "react";

import ToDo from "./ToDo";

import CancellButton from "./CancellButton";

import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container-flex-big bg-black vh-100 ">
			<div className="container" >
				<div className="div">
					<p className="cardTitle text-center">Todos</p>	
				</div>
				<div className="container-flex ">
					<div className="row noteBook bg-white">
						<div className="col-12 d-felx flex-column inputStyle">
							<div className="div border row align-items-center pt-2 pb-2 fs-4 ">
								<div className="col-10">
									{ToDo()}
								</div>
								<div className="col-2 text-right">
								<div style={{ textAlign: 'right' }}>
										{CancellButton()}
									</div>
								</div>
							</div>
							<div className="container-flex bg-white">
							{Footer()}
							</div>
	


						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
