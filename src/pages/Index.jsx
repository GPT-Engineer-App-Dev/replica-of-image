import { Container, Box, VStack, HStack, Text, Input, Button, Link, Icon, Image } from "@chakra-ui/react";
import { FaGoogle, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
      <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={8}>
        <Image src="/logo.png" alt="Logo" boxSize="50px" mb={4} />
        <Text fontSize="2xl" fontWeight="bold" mb={4}>FINOTIC</Text>
        <Box bg="white" p={6} rounded="md" shadow="md" mb={4}>
          <Text fontSize="sm" color="gray.500">CURRENT BALANCE</Text>
          <Text fontSize="3xl" fontWeight="bold">$24,359</Text>
        </Box>
        <Box bg="white" p={6} rounded="md" shadow="md" mb={4}>
          <Text fontSize="sm" color="gray.500">34% Food</Text>
          <Image src="/chart.png" alt="Chart" boxSize="100px" />
        </Box>
        <Box bg="white" p={6} rounded="md" shadow="md">
          <Text fontSize="sm" color="gray.500">New transaction</Text>
          <Text fontSize="xs" color="gray.400">or upload .xls file</Text>
        </Box>
      </Box>
      <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Welcome back!</Text>
        <Text fontSize="sm" color="gray.500" mb={4}>Start managing your finance faster and better</Text>
        <VStack spacing={4} width="100%">
          <HStack width="100%" bg="gray.100" p={4} rounded="md">
            <Icon as={FaEnvelope} color="gray.500" />
            <Input placeholder="you@example.com" variant="unstyled" />
          </HStack>
          <HStack width="100%" bg="gray.100" p={4} rounded="md">
            <Icon as={FaLock} color="gray.500" />
            <Input placeholder="At least 8 characters" variant="unstyled" type="password" />
            <Icon as={FaLock} color="gray.500" />
          </HStack>
          <Link alignSelf="flex-end" color="blue.500" fontSize="sm">Forgot password?</Link>
          <Button colorScheme="blue" width="100%">Login</Button>
          <Text fontSize="sm" color="gray.500">or</Text>
          <HStack spacing={4} width="100%">
            <Button leftIcon={<FaGoogle />} colorScheme="red" width="100%">Google</Button>
            <Button leftIcon={<FaFacebook />} colorScheme="blue" width="100%">Facebook</Button>
          </HStack>
          <Text fontSize="sm" color="gray.500">Don't you have an account? <Link color="blue.500">Sign Up</Link></Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;