import React, { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import {
	FAQContainer,
	FAQHeadline,
	FAQInput,
	FAQItem,
	FAQQuestion,
	FAQSec1,
	FAQSec2,
	FAQSec2Span,
	FAQSec3,
	FAQSec3Span,
	FAQSec4,
	FAQWrap,
} from './FAQElements';
import data from './data';
const Index = () => {
	const [checkedData, setCheckedData] = useState(
		data.map((question) => ({
			...question,
			checked: false,
		}))
	);

	const findQuestionIndexById = (id) => {
		return checkedData.findIndex(
			(question) => question.id === id
		);
	};

	const checkQuestion = (id) => {
		const questionIndex = findQuestionIndexById(id);
		const newCheckedData = [...checkedData];
		newCheckedData[questionIndex].checked =
			!newCheckedData[questionIndex].checked;
		setCheckedData(newCheckedData);
	};

	return (
		<FAQWrap id='faq'>
			<FAQContainer>
				<FAQHeadline>FAQ</FAQHeadline>
				{checkedData.map(
					({ id, title, content, checked }) => {
						return (
							<FAQItem key={id}>
								<FAQInput
									id={id}
									role='checkbox'
									onClick={() => checkQuestion(id)}
								>
									<FAQQuestion>
										<FAQSec1 />
										<FAQSec2>
											<FAQSec2Span
												className={
													checked
														? 'active'
														: ''
												}
												height='24px'
											>
												{title}
											</FAQSec2Span>
										</FAQSec2>
										<FAQSec3>
											<FAQSec3Span
												className={
													checked
														? 'active'
														: ''
												}
											>
												{content}
											</FAQSec3Span>
										</FAQSec3>
										<FAQSec4
											className={
												checked
													? 'active'
													: ''
											}
										>
											<FaAngleUp />
										</FAQSec4>
									</FAQQuestion>
								</FAQInput>
							</FAQItem>
						);
					}
				)}
			</FAQContainer>
		</FAQWrap>
	);
};

export default Index;
