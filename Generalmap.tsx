import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import InputFields from './InputField';
import axios from 'axios';
import { PayLoadBody } from './PayLoadBody';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type GeneralMapProps = {
	value: {
		[key: string]: {
			Heading: any;
			Parent: any;
			Page: any;
			child: {
				type: any;
				name: any;
				className: any;
				// placeholder: string;
			}[];
			btnContainer?: any;
			btnClass?: any;
			btnContent?: any;
			Btnstyle?: {
				[key: string]: any;
			};
		}[];
	}[];
};

type PayLoadBody = {
	[key: string]: {
		[key: string]: string | number | number[] | { [key: string]: string | number };
	};
};
const Generalmap: React.FC<GeneralMapProps> = ({ value }) => {
	const inputFields: {
		[key: string]: any;
	} = {
		text: InputFields,
		file: InputFields
	};

	const initialFormValues: { [key: string]: string } = {};
	value?.forEach(childData => {
		Object?.values(childData)?.forEach(section => {
			section?.forEach(self => {
				self.child?.forEach(values => {
					initialFormValues[values.name] = '';
				});
			});
		});
	});
	console.log(initialFormValues, 'initialFormValues');
	//Initial values for the formik
	const [initialValues, setInitialValues] = useState<any>(initialFormValues);
	const [formValues, setFormValues] = useState({});
	const handleSubmit = async (values: any, { setFieldValue }: any) => {
		let PageName = value?.[0].Section1?.[0].Page;
		let body = PayLoadBody?.[PageName];
		body.meta_data = values;
		try {
			const response = await axios.post('https://webwila.com/giftopedia/public/api/v1/udpatePage', body, {
				headers: {
					Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2RhNDIyYTEyNDg3MmJiYjhhYTc1NTM1NDUxNWIzNWI4NDc1ZGFkNWI5MTg2YTg1YWNmZDRjZWVhOTVlYjUxMzZjOThiNWE1NTg2MzdiZWMiLCJpYXQiOjE2OTg4MjQ1MDkuNDczNzk4LCJuYmYiOjE2OTg4MjQ1MDkuNDczOCwiZXhwIjoxNzMwNDQ2OTA5LjQ2ODQyMywic3ViIjoiMSIsInNjb3BlcyI6W119.YYzPQJUPzDcUux1j_Itcx7j8-1fz_jk-S4VSpbe2ysvKk0NOE-iTAomMjoGsUJmIXeZg-AMn2OH1JoomoLf8oLSusOqytNg7QPACF7BqE7Mwj5Bikd_Jk3HQ6oA4PQdxVu42y-o5-5trPb3mCarv4iYnYFZ6Pr0UcTqW915WchpRqPkzzQMBSzCv74MLnIBU3X-qCNzW1jbxatGtFXXrjjZfi_Huf4eHyXSr4KUEYZQQYcJ5fA9YEGVq8weGzaQBXHs7ITC8RN5QLs-P6Eu-3DcbblyQsMMSflpxFy7fEupc6Qjsv0WkmeYY8r0Z3zSdUMCiwfRxP2hS3fdb5KiFXyjYPHcUvz3gpXJyXBoKlGN19kri1L3W_BPPy1CY55zWmrF1JOrUTZJLikpv141ySD8EeSdo4e2MwEmlGgA7EUulDj2HnNGUcuqIcKZj5zyp5BqoV1AnFx8mJXM79cI7eFv-6rlKyHyxwNT_lzPhsnmFn9ACVbaExAlLMQFZ58kFLJaFhqtgS3tJBtuIO5gRP8eV1IIJ3MV-YKDG7Muj87Hmz1hRvacU6SRVbKHhLMiO7iYwZw_l03bRcoZrzEZ3HLjt6GH46YayX7n-fRPJqPObM32gR1w6n89Ii_QrvLga_eX0Z_yXE1UAo0zJty7fWVezunrxdiYxkgx4I4sYQU0`,
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});
			response.status == 200 ? toast.success(response.data.msg) : toast.error('Error');
		} catch (error) {
			console.error('Error:', error);
		}
	};

	useEffect(() => {
		axios
			.get('https://webwila.com/giftopedia/public/api/v1/page/home', {
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
			.then(res => {
				console.log(res.data.data.page.meta_data);
				setInitialValues(res.data.data.page.meta_data);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	console.log(initialValues, 'initialValues', formValues, 'formValues');
	return (
		<div>
			<Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
				{({ handleChange, values }) => (
					<Form>
						{value?.map(childData => {
							return Object?.values(childData)?.map(section => {
								return section?.map((self, index) => (
									<div key={index} className="container-fluid mt-4">
										<div className="card">
											<div className="card-body">
												<div key={index} className="row justify-content-center">
													<h1 className="col-md-3 d-flex justify-content-center ">{self.Heading}</h1>
													<div key={index} className={self.Parent}>
														{self.child?.map((child, index) => {
															const FieldComponent = inputFields[child.type];
															return (
																<div className={child.className} key={index}>
																	{child.type == 'Area' ? (
																		<textarea
																			placeholder={child.name}
																			className="form-control"
																			id={child.name}
																			name={child.name}
																			rows={3}
																			onChange={handleChange}
																			value={values?.[child.name]}
																			// value={initialValues[child.name]}
																		></textarea>
																	) : (
																		<Field
																			as={FieldComponent}
																			type={[
																				{
																					FieldType: child.type,
																					Name: child.name,
																					handleChange: handleChange,
																					initialValues: values
																				}
																			]}
																		/>
																	)}
																</div>
															);
														})}
													</div>
													<div className={self?.btnContainer}>
														<button type="submit" className={self?.btnClass} style={self?.Btnstyle}>
															{self?.btnContent}
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								));
							});
						})}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Generalmap;

// useEffect(() => {
// 	axios
// 		.get('https://webwila.com/giftopedia/public/api/v1/page/home', {
// 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
// 		})
// 		.then(res => {
// 			setInitialValues(res.data.data.page.meta_data);
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		});
// }, []);
