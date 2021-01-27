// Libraries
import React, { useRef, useState, useEffect } from 'react'

// Components
import Footer from 'containers/Footer';
import Header from 'containers/Header';
import { Col, Row } from 'antd';
import Slider from 'react-slick'

const Certificate = (props) => {
	// Variables
	const rightSliderSettings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		speed: 500,
		rows: 3,
		slidesPerRow: 3
	};

	// Props
	const { lang } = props;

	// State
	const [state, setState] = useState({ navLeft: null, navRight: null });
	const [certificates] = useState([
		{ key: '1', pathImage: '/images/certificate/Asset 18@2x.png' },
		{ key: '2', pathImage: '/images/certificate/Asset 18@2x.png' },
		{ key: '3', pathImage: '/images/certificate/Asset 18@2x.png' },
		{ key: '4', pathImage: '/images/certificate/Asset 18@2x.png' },
		{ key: '5', pathImage: '/images/certificate/Asset 18@2x.png' },
		{ key: '6', pathImage: '/images/certificate/Asset 18@2x.png' },
		{ key: '7', pathImage: '/images/certificate/Asset 18@2x.png' },
		{ key: '8', pathImage: '/images/certificate/Asset 18@2x.png' },
		{ key: '9', pathImage: '/images/certificate/Asset 18@2x.png' },
	])

	const refSliderLeft = useRef(null)
	const refSliderRight = useRef(null)

	// Life crycle
	useEffect(() => {
		setState({
			navLeft: refSliderLeft.current,
			navRight: refSliderRight.current
		});
	}, []);

	return (
		<div className='wrap__content'>
			<Header lang={lang} />
			<div className="wrap__certificate">
				{/* certifcate container */}
				<div className="certificate__content">
					<Row className='first-row'>
						<div className="first-row-content">
							<img className='img-top' src='/images/trangchu-06.png' alt='top'></img>
							<div className="banner-top" >
								<img src="/images/trangchu-02.png" alt="logo" width={60} />
								<div className='banner-content'>Chứng chỉ của chúng tôi</div>
							</div>
						</div>
					</Row>
					<Row className='second-row'>
						<Col xs={{ span: 24 }} md={{ span: 12 }} >
							<Slider
								asNavFor={state.navRight}
								ref={refSliderLeft}
							>
								{certificates.length ? certificates.map(certificate => {
									return (
										<div className='slider-item-left' key={certificate.key}>
											<div className='slider-item-left-image'>
												<img src={certificate.pathImage} ></img>
											</div>
											<br></br>
											<div className="slider-item-left-content">
												<h3>Tên chứng chỉ</h3>
												<p>Cục quản lý Thực phẩm và Dược phẩm hay Cơ quan Quản lý Thực phẩm và Thuốc Hoa Kỳ là cơ quan quản lý thực phẩm và dược phẩm của Hoa Kỳ, thuộc Bộ Y tế và Dịch vụ Nhân sinh Hoa Kỳ. Trụ sở đóng tại Washington DC, Hoa Kỳ. Cục được lập năm 1906.</p>
											</div>
										</div>
									)
								}) : null}
							</Slider>

						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Slider
								{...rightSliderSettings}
								asNavFor={state.navLeft}
								ref={refSliderRight}
								swipeToSlide={true}
								arrows={false}
								focusOnSelect={true}
							>
								{certificates.length ? certificates.map(certificate => {
									return (
										<div key={certificate.key}>
											<img src={certificate.pathImage} width={70}></img>
										</div>
									)
								}) : null}
							</Slider>

						</Col>
					</Row>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Certificate;