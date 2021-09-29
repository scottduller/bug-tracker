import React from 'react';

import {
	InfoColumn,
	InfoDescription,
	InfoHeadline,
	InfoImage,
	InfoImageWrap,
	InfoRow,
	InfoTextWrap,
	InfoTopLine,
} from './InfoElements';
import data from './data';

const Index = () => {
	return (
		<>
			{data.map(
				({
					id,
					reverse,
					lightBg,
					img,
					topLine,
					headline,
					description,
				}) => (
					<InfoRow
						id={id}
						reverse={reverse}
						lightBg={lightBg}
					>
						<InfoColumn columns={6}>
							<InfoTextWrap reverse={reverse}>
								<InfoTopLine>{topLine}</InfoTopLine>
								<InfoHeadline>
									{headline}
								</InfoHeadline>
								<InfoDescription>
									{description}
								</InfoDescription>
							</InfoTextWrap>
						</InfoColumn>
						<InfoColumn columns={6}>
							<InfoImageWrap reverse={reverse}>
								<InfoImage src={img} alt={id} />
							</InfoImageWrap>
						</InfoColumn>
					</InfoRow>
				)
			)}
		</>
	);
};

export default Index;
