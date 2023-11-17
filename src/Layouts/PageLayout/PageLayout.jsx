import React from 'react'
import { Box, Flex, Spinner } from "@chakra-ui/react";
import Slidebar from '../../components/Slidebar/Slidebar';
import { useLocation } from 'react-router-dom';
const PageLayout = ({ children }) => {
    const { pathname } = useLocation()
    return (
        <Flex>
            {/* sidebar on the left */}
            {pathname !== "/auth" ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <Slidebar />
                </Box>
            ): null}

            {/* the page content on the right */}
            <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
                {children}
            </Box>

        </Flex>
    )
}

export default PageLayout
