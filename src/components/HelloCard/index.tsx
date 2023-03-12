import { Center, Flex, Img, Text } from '@chakra-ui/react'

const HelloCard = () => {
	return (
		<Center width={'100vw'} height={'100vh'} background={'brand.background'}>
			<Flex
				direction={{ base: 'column', md: 'row' }}
				justifyItems={'center'}
				alignItems={'center'}
				textAlign={{ base: 'center', md: 'left' }}
			>
				<Img
					src={'/imgs/christopher.png'}
					width={250}
					height={250}
					borderRadius={'100%'}
					alt='Christopher Correa, Software Engineer'
				/>
				<Flex direction={'column'}>
					<Text ml={{ base: 0, md: 10 }} variant={'title'}>
						Hello, I{"'"}m Chris.
					</Text>
					<Text
						ml={{ base: 0, md: 10 }}
						mt={-10}
						maxWidth={'16ch'}
						alignSelf={{ base: 'center', md: 'start' }}
						textTransform={'uppercase'}
						variant={'subtitle'}
					>
						Feel welcome to my world.
					</Text>
				</Flex>
			</Flex>
		</Center>
	)
}

export default HelloCard
