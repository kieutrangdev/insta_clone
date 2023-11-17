import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const AuthForm = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const [input, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleLogin = () => {
        if(!input.email || !input.password) {
            alert("Please fill all the fields")
            return;
        }
        navigate("/")
    }
    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />
                    <Input placeholder='Email'
                     fontSize={14} 
                     value={input.email}
                     onChange={(e) => setInputs({...input, email:e.target.value})}
                     type="email">

                    </Input>
                    <Input placeholder='Password' 
                    fontSize={14} 
                    type="password"
                    value={input.password}
                    onChange={(e) => setInputs({...input, password:e.target.value})}
                    ></Input>
                    {isLogin==true?  null : <Input 
                     value={input.confirmPassword}
                     onChange={(e) => setInputs({...input, confirmPassword:e.target.value})}
                    placeholder='Confirm Password' 
                    fontSize={14} type="Password"></Input> }

                    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}  onClick={handleLogin}>
                        {isLogin ? "Log in" : "Sign up"}
                    </Button>

                    {/* ----------------OR ---------------  */}
                    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text mx={1} color={"while"}>OR</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>

                    <Flex alignContent={"center"} justifyContent={"center"} cursor={"pointer"}>
                        <Image src='/google.png' w={5} alt="Google logo"></Image>
                        <Text mx='2' color={"blue.500"}>
                            Log in with google
                        </Text>
                    </Flex>
                </VStack>
            </Box>

            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
				<Flex alignItems={"center"} justifyContent={"center"}>
					<Box mx={2} fontSize={14}>
						{isLogin ? "Don't have an account?" : "Already have an account?"}
					</Box>
					<Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
						{isLogin ? "Sign up" : "Log in"}
					</Box>
				</Flex>
			</Box>
        </>
    )
}

export default AuthForm
