import React from 'react';

interface Props {
	toggleModal: (b: boolean) => void;
}

const Modal: React.FC<Props> = ({ toggleModal }) => {
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if ((event.target as HTMLDivElement).classList.contains('bg-gray-900')) {
			toggleModal(false);
		}
	};
	return (
		<>
			<div className='fixed inset-0 z-10 overflow-y-auto' onClick={handleClick}>
				<div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
					<div className='fixed inset-0 transition-opacity'>
						<div className='absolute inset-0 bg-gray-900 opacity-25'></div>
					</div>
					<span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
					&#8203;
					<div className='inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
						<div className='px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4'>
							<div className='sm:flex sm:items-start'>
								<div className='flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10'>
									<svg
										className='w-6 h-6 text-red-600'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
										/>
									</svg>
								</div>
								<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
									<h3 className='text-lg font-medium leading-6 text-gray-900'>
										Delete Fund
									</h3>
									<div className='mt-2'>
										<p className='text-sm leading-5 text-gray-600'>
											Are you sure you want to delete this fund? All of the data
											included in this fund will be permanently removed. This
											action cannot be undone.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse'>
							<span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
								<button
									type='button'
									className='inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5'
								>
									Delete
								</button>
							</span>
							<span className='flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto'>
								<button
									type='button'
									className='inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5'
									onClick={() => toggleModal(false)}
								>
									Cancel
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
