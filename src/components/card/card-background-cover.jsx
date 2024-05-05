import { images } from '@/utils/constant';

const CardBackgroundCover = () => {
	return (
		<div className='relative  flex items-center justify-start bg-[#00549B]'>
			<div className='login-bg-cover absolute inset-0' />
			<div className='mx-20 w-full gap-y-7 flex flex-col'>
				<img src={images[0].path} alt={images[0].alt} srcSet={images[0].srcset} className='h-[134px] w-[113px]' />
				<div>
					<h4 className='text-white text-3xl line leading-login-125 font-bold'>Human Resource Integrated System</h4>
					<p className='text-white text-xl leading-login-125 font-normal w-[430px] '>Empowering People, Streamlining Processes: Your HRIS Solution</p>
				</div>
			</div>
		</div>
	);
};

export default CardBackgroundCover;
