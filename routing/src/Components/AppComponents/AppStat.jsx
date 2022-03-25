import { Box, Container, SimpleGrid, As,
    Heading,
    HStack,
    Icon,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,} from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMail, FiSend, FiUsers } from 'react-icons/fi'
  import { FiArrowDownRight, FiArrowUpRight, FiMoreVertical } from 'react-icons/fi'
  
  
  // const stats = [
  //   {
  //     icon: FiUsers,
  //     label: 'Total Subscribers',
  //     value: '71,887',
  //     delta: { value: '320', isUpwardsTrend: true },
  //   },
  //   {
  //     icon: FiMail,
  //     label: 'Avg. Open Rate',
  //     value: '56.87%',
  //     delta: { value: '2.3%', isUpwardsTrend: true },
  //   },
  //   {
  //     icon: FiSend,
  //     label: 'Avg. Click Rate',
  //     value: '12.87%',
  //     delta: { value: '0.1%', isUpwardsTrend: false },
  //   },
  // ]
  
  function AppStat(){
      return (
        <Box as="section" py={{ base: '4', md: '8' }}>
      <Container>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: '5', md: '6' }}>
          {/* {stats.map((stat, id) => ( */}
            {/* <Stat key={id} {...stat} /> */}
            <Box
                px={{ base: '4', md: '6' }}
                py={{ base: '5', md: '6' }}
                bg="bg-surface"
                borderRadius="lg"
                boxShadow={useColorModeValue('sm', 'sm-dark')}
            >
                <Stack spacing={{ base: '5', md: '6' }}>
                <Stack direction="row" justify="space-between">
                    <HStack spacing="4">
                    <Square size="12" bg="bg-accent-subtle" borderRadius="md">
                        <Icon as={FiUsers} boxSize="6" color="on-accent" />
                    </Square>
                    <Text fontWeight="medium">Total Subscribers</Text>
                    </HStack>
                    <Icon as={FiMoreVertical} boxSize="5" color="muted" />
                </Stack>
                <Stack spacing="4">
                    <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>71,887</Heading>
                    <HStack spacing="1" fontWeight="medium">
                    <Icon
                        color="whatsapp.900"
                        as={FiArrowUpRight}
                        boxSize="5"
                    />
                    <Text color='red.500'>71,887</Text>
                    <Text color="red.500">vs last week</Text>
                    </HStack>
                </Stack>
                </Stack>
            </Box>

  
          {/* ))} */}
        </SimpleGrid>
      </Container>
    </Box>
      )
  }
export default AppStat