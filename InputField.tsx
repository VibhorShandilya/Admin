import axios from 'axios';
import { ChangeEvent, useState } from 'react';

type InputProp = {
	type: {
		FieldType: string;
		Name: string;
		handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
		initialValues: any;
	}[];
};

const InputFields = ({ type }: InputProp) => {
	const handleImageUpload = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const formData = new FormData();
		formData.append('fileInput', e.target.files[0]);

		let imgResponse = await axios.post(
			'https://webwila.com/giftopedia/public/api/v1/media/upload?fileInput',
			formData,
			{
				headers: {
					Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2RhNDIyYTEyNDg3MmJiYjhhYTc1NTM1NDUxNWIzNWI4NDc1ZGFkNWI5MTg2YTg1YWNmZDRjZWVhOTVlYjUxMzZjOThiNWE1NTg2MzdiZWMiLCJpYXQiOjE2OTg4MjQ1MDkuNDczNzk4LCJuYmYiOjE2OTg4MjQ1MDkuNDczOCwiZXhwIjoxNzMwNDQ2OTA5LjQ2ODQyMywic3ViIjoiMSIsInNjb3BlcyI6W119.YYzPQJUPzDcUux1j_Itcx7j8-1fz_jk-S4VSpbe2ysvKk0NOE-iTAomMjoGsUJmIXeZg-AMn2OH1JoomoLf8oLSusOqytNg7QPACF7BqE7Mwj5Bikd_Jk3HQ6oA4PQdxVu42y-o5-5trPb3mCarv4iYnYFZ6Pr0UcTqW915WchpRqPkzzQMBSzCv74MLnIBU3X-qCNzW1jbxatGtFXXrjjZfi_Huf4eHyXSr4KUEYZQQYcJ5fA9YEGVq8weGzaQBXHs7ITC8RN5QLs-P6Eu-3DcbblyQsMMSflpxFy7fEupc6Qjsv0WkmeYY8r0Z3zSdUMCiwfRxP2hS3fdb5KiFXyjYPHcUvz3gpXJyXBoKlGN19kri1L3W_BPPy1CY55zWmrF1JOrUTZJLikpv141ySD8EeSdo4e2MwEmlGgA7EUulDj2HnNGUcuqIcKZj5zyp5BqoV1AnFx8mJXM79cI7eFv-6rlKyHyxwNT_lzPhsnmFn9ACVbaExAlLMQFZ58kFLJaFhqtgS3tJBtuIO5gRP8eV1IIJ3MV-YKDG7Muj87Hmz1hRvacU6SRVbKHhLMiO7iYwZw_l03bRcoZrzEZ3HLjt6GH46YayX7n-fRPJqPObM32gR1w6n89Ii_QrvLga_eX0Z_yXE1UAo0zJty7fWVezunrxdiYxkgx4I4sYQU0`
				}
			}
		);

		console.log(imgResponse?.data.uploaded_items);
	};
	return (
		<>
			{type.map((input, index) => (
				<div key={index}>
					{input.FieldType == 'text' ? (
						<input
							style={{ width: '100%', height: '40px' }}
							className="form-control"
							type={input.FieldType}
							name={input.Name}
							id=""
							placeholder={input.Name}
							onChange={input.handleChange}
							value={input.initialValues[input.Name]}
						/>
					) : (
						<input
							style={{ width: '100%', height: '40px' }}
							className="form-control"
							type={input.FieldType}
							name={input.Name}
							id=""
							placeholder={input.Name}
							onChange={e => {
								input.handleChange;
								handleImageUpload(e);
							}}
						/>
					)}
				</div>
			))}
		</>
	);
};

export default InputFields;
