// Libraries
import React, { useRef, useState, useEffect, useMemo } from 'react'

// Components
import Footer from 'containers/Footer';
import Header from 'containers/Header';
import { Col, Row } from 'antd';
import Slider from 'react-slick'
import { Image, Pagination } from 'antd';
import { motion } from 'framer-motion';
import { translations } from 'constant';

const Certificate = (props) => {
	// Props
	const { lang } = props;

	// State
	const [current, setCurrent] = useState(1)
	const [pageSize, setPageSize] = useState(9)
	const [state, setState] = useState({ navLeft: null, navRight: null });
	const [currentCertificate, setCurrentCertificate] = useState(0);
	const [certificates] = useState([
		{ key: '1', pathImage: '/images/original/certificate/gang tay habimec-10.jpg' },
		{ key: '2', pathImage: '/images/original/certificate/gang tay habimec-11.jpg' },
		{ key: '3', pathImage: '/images/original/certificate/gang tay habimec-12.jpg' },
		{ key: '4', pathImage: '/images/original/certificate/gang tay habimec-13.jpg' },
		{ key: '5', pathImage: '/images/original/certificate/gang tay habimec-14.jpg' },
		{ key: '6', pathImage: '/images/original/certificate/gang tay habimec-15.jpg' },
		{ key: '7', pathImage: '/images/original/certificate/gang tay habimec-16.jpg' },
		{ key: '8', pathImage: '/images/original/certificate/gang tay habimec-17.jpg' },
		{ key: '9', pathImage: '/images/original/certificate/gang tay habimec-18.jpg' },
		{ key: '10', pathImage: '/images/original/certificate/gang tay habimec-19.jpg' },
		{ key: '11', pathImage: '/images/original/certificate/gang tay habimec-20.jpg' },
		{ key: '12', pathImage: '/images/original/certificate/gang tay habimec-21.jpg' },
		{ key: '13', pathImage: '/images/original/certificate/gang tay habimec-22.jpg' },
		{ key: '14', pathImage: '/images/original/certificate/gang tay habimec-23.jpg' },
		{ key: '15', pathImage: '/images/original/certificate/gang tay habimec-24.jpg' },
		{ key: '16', pathImage: '/images/original/certificate/gang tay habimec-25.jpg' },
		{ key: '17', pathImage: '/images/original/certificate/gang tay habimec-26.jpg' },
		{ key: '18', pathImage: '/images/original/certificate/gang tay habimec-27.jpg' },
		{ key: '19', pathImage: '/images/original/certificate/gang tay habimec-28.jpg' },
		{ key: '20', pathImage: '/images/original/certificate/gang tay habimec-29.jpg' },
		{ key: '21', pathImage: '/images/original/certificate/gang tay habimec-30.jpg' },
		{ key: '22', pathImage: '/images/original/certificate/gang tay habimec-31.jpg' },
		{ key: '23', pathImage: '/images/original/certificate/gang tay habimec-32.jpg' },
		{ key: '24', pathImage: '/images/original/certificate/gang tay habimec-33.jpg' },
		{ key: '25', pathImage: '/images/original/certificate/gang tay habimec-34.jpg' },
	])

	const refSliderLeft = useRef(null)
	const refSliderRight = useRef(null)

	const newCertificates = useMemo(() => {
		let draftCertificates = [];

		for (let i = (current - 1) * pageSize; i < (current - 1) * pageSize + pageSize; i++) {
			if (certificates[i]) {
				draftCertificates.push(certificates[i]);
			}
		}

		return draftCertificates

	}, [current])

	// Life crycle
	useEffect(() => {
		setState({
			navLeft: refSliderLeft.current,
			navRight: refSliderRight.current
		});
	}, []);

	const onChangePagination = (index) => {
		setCurrent(index)
	}

	const onClickCertificate = (index) => {
		setCurrentCertificate(index);
		refSliderLeft.current.slickGoTo(index)
	}

	return (
		<div className='wrap__content animate__animated animate__fadeIn'>
			<Header lang={lang} />
			<div className="wrap__certificate">
				<div className="certificate__content">
					<img width={'100%'} src="/images/original/home/star-image.png" alt="" />
					<div className='d-flex j-c wrap__logo-banner'>
						<motion.div
							className="logo-banner__box"
							animate={{
								boxShadow: ['0 0 0 0 rgba(3,149,229,.4)', '0 0 0 15px rgba(3,149,229,0)']
							}}
							transition={{
								duration: 1.5,
								ease: 'easeInOut',
								times: [0, 1],
								loop: Infinity,
								repeatDelay: 1
							}}
						>
							<img src="/images/trangchu-02.png" className='logo-image' alt="" />
							<div className="brand__title">{translations[lang]['our certificate'].toUpperCase()}</div>
						</motion.div>
					</div>
					<Row className='second-row' gutter={50} style={{ paddingBottom: 20 }}>
						<Col xs={{ span: 24 }} md={{ span: 12 }} >
							<Image.PreviewGroup>
								<Slider
									ref={refSliderLeft}
									beforeChange={(pre, next) => { setCurrentCertificate(next) }}
								>
									{newCertificates.length ? newCertificates.map(certificate => {
										return (
											<div className='slider-item-left' key={certificate.key}>
												<div className='slider-item-left-image'>
													<Image width={'100%'} src={certificate.pathImage} ></Image>
												</div>
												<br></br>
												<div className="slider-item-left-content">
													<h3 className='slider-item__title'>TÊN CHỨNG CHỈ</h3>
													<p>Cục quản lý Thực phẩm và Dược phẩm hay Cơ quan Quản lý Thực phẩm và Thuốc Hoa Kỳ là cơ quan quản lý thực phẩm và dược phẩm của Hoa Kỳ, thuộc Bộ Y tế và Dịch vụ Nhân sinh Hoa Kỳ. Trụ sở đóng tại Washington DC, Hoa Kỳ. Cục được lập năm 1906.</p>
												</div>
											</div>
										)
									}) : null}
								</Slider>
							</Image.PreviewGroup>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<div className="right-group__image">
								<Row gutter={[30, 30]} id='wrap-certificate-small' className='animate__animated animate__fadeIn'>
									{newCertificates && newCertificates.length ? newCertificates.map((certificate, index) => {
										return (
											<Col onClick={() => onClickCertificate(index)} key={certificate.key} span={8} style={{ width: '100%' }}>
												<div className={`wrap-image__certificate ${currentCertificate === index ? 'active-certificate' : ''}`}>
													<img className={`certificate-small__image animate__animated animate__fadeIn`} src={certificate.pathImage} alt="" width={'100%'} />
												</div>
											</Col>
										)
									}) : null}
								</Row>
								<div className="d-flex j-c">
									<Pagination pageSize={pageSize} onChange={onChangePagination} current={current} total={certificates.length} />
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			<Footer lang={lang} />
		</div>
	)
}

export default Certificate;