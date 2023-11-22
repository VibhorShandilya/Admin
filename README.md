/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import MapImg from './images/map.png';
import '../map/Map.css';
const HomeMap = () => {
	let Europe = ['block', 'block', 'block', 'block', 'block', 'block', 'block', 'block'];

	return (
		<>
			<h1 className="text-center text-3xl lg:text-5xl py-8 font-bold">Making Impact Across Globe</h1>
			<div style={{ background: 'rgb(46,49,146)' }}>
				<div className="relative h-auto lg:min-h-screen">
					<div
						className="relative w-full h-full flex items-center justify-center bg-[#2e3192]"
						style={{ margin: 'auto', maxWidth: '80rem' }}
					>
						<img src={MapImg} alt="" className="max-w-full object-cover" />

						<p></p>

						<div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[0px] top-[31%] left-[23%]">
							<span className="text-sm px-1">North America</span>
							<span
								style={{ color: 'orange', fontSize: '25px', fontWeight: 'bold', cursor: 'pointer' }}
								className="mt-1.5 test"
							>
								+
								<ul className="absolute inset-0 bg-white top-full h-max hidden " style={{ borderRadius: '15px' }}>
									{Europe.map((item, index) => (
										<li key={index} className="flex justify-center mt-2" id={index}>
											{item}
										</li>
									))}
								</ul>
							</span>
						</div>

						<div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[1px] top-[53%] left-[23%]">
							<span className="text-sm px-1">East Asia</span>
							<span
								style={{ color: 'orange', fontSize: '25px', fontWeight: 'bold', cursor: 'pointer' }}
								className="mt-1.5 mapComponent test"
							>
								+
								<ul className="absolute inset-0 bg-white top-full h-max hidden " style={{ borderRadius: '15px' }}>
									{Europe.map((item, index) => (
										<li key={index} className="flex justify-center mt-2" id={index}>
											{item}
										</li>
									))}
								</ul>
							</span>
						</div>
						{/* <div className="row ">
							<div className="col-12 hide">
								<ul>
									<li>Hello</li>
								</ul>
							</div>
						</div> */}
						<div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[1px] top-[23%] left-[83%]">
							<span className="text-sm px-1">South Asia </span>
							<span
								style={{ color: 'orange', fontSize: '25px', fontWeight: 'bold', cursor: 'pointer' }}
								className="mt-1.5 test"
							>
								+
								<ul className="absolute inset-0 bg-white top-full h-max hidden " style={{ borderRadius: '15px' }}>
									{Europe.map((item, index) => (
										<li key={index} className="flex justify-center mt-2" id={index}>
											{item}
										</li>
									))}
								</ul>
							</span>
						</div>
						<div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[63%] left-[55%]">
							<span className="text-sm px-1">Australia</span>
							<span
								style={{ color: 'orange', fontSize: '25px', fontWeight: 'bold', cursor: 'pointer' }}
								className="mt-1.5 test"
							>
								+
								<ul className="absolute inset-0 bg-white top-full h-max hidden " style={{ borderRadius: '15px' }}>
									{Europe.map((item, index) => (
										<li key={index} className="flex justify-center mt-2" id={index}>
											{item}
										</li>
									))}
								</ul>
							</span>
						</div>
						<div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[43%] left-[55%]">
							<span className="text-sm px-1">Africa</span>
							<span
								style={{ color: 'orange', fontSize: '25px', fontWeight: 'bold', cursor: 'pointer' }}
								className="mt-1.5 test"
							>
								+
								<ul className="absolute inset-0 bg-white top-full h-max hidden " style={{ borderRadius: '15px' }}>
									{Europe.map((item, index) => (
										<li key={index} className="flex justify-center mt-2" id={index}>
											{item}
										</li>
									))}
								</ul>
							</span>
						</div>

						<div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[13%] left-[55%]">
							<span className="text-sm px-1">Europe</span>
							<span
								style={{ color: 'orange', fontSize: '25px', fontWeight: 'bold', cursor: 'pointer' }}
								className="mt-1.5 mapComponent block test "
							>
								+
								<ul className="absolute inset-0 bg-white top-full h-max hidden " style={{ borderRadius: '15px' }}>
									{Europe.map((item, index) => (
										<li key={index} className="flex justify-center mt-2" id={index}>
											{item}
										</li>
									))}
								</ul>
							</span>
						</div>

						<div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[13%] left-[25%]">
							<span className="text-sm px-1">South Ameria</span>
							<span
								style={{ color: 'orange', fontSize: '25px', fontWeight: 'bold', cursor: 'pointer' }}
								className="mt-1.5 test"
							>
								+
								<ul className="absolute inset-0 bg-white top-full h-max hidden " style={{ borderRadius: '15px' }}>
									{Europe.map((item, index) => (
										<li key={index} className="flex justify-center mt-2" id={index}>
											{item}
										</li>
									))}
								</ul>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png

export default HomeMap;
