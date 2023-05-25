import React, {FC, useEffect, useState} from "react";
import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    List,
    ListItem,
    VStack,
    Text,
    Stack,
    Image,
    BoxProps, Flex, StackDivider
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useFetchPersonDetailsAndCredits} from "../../services/person-service/person-details-service";
import {multiSearch} from "../../services/search/search-service";
import MultiSearchResponse from "../../models/search/multi-search-response";
import {getPosterImageUri} from "../../services/images";
import {useNavigate} from "react-router-dom";
const scrollbarStyles = {
    width: "8px",
    backgroundColor: "white",
    borderRadius: "4px",
};

const hoverStyles = {
    backgroundColor: "darkgray",
};
interface searchBarProperties {
  width:number
}
export const SearchBar: FC<searchBarProperties> = ({width}) => {
    const Background_Temp =
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

    function debounce(func: Function, delay: number) {
        let timerId: NodeJS.Timeout;

        return (...args: any[]) => {
            clearTimeout(timerId);

            timerId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<MultiSearchResponse | null>(null);
    const handleSearchInputChange = (event: any) => {
        const {value} = event.target;
        setSearchTerm(value);
    };

    const debouncedSearchTerm = debounce(handleSearchInputChange, 1000);
    const performSearch = async () => {
        const result = await multiSearch(searchTerm);
        setSearchResults(result ?? null);
    };
    const navigate = useNavigate();

    // Execute the search logic when the debounced search term changes
    useEffect(() => {
        performSearch();
    }, [searchTerm]);

    return (
        <>
            <VStack spacing={4} align="stretch">
                <InputGroup width={[width/2.5,width]}>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300"/>}
                    />
                    <Input onChange={debouncedSearchTerm} bg="white" type="text"
                           placeholder="Search"/>
                </InputGroup>
                <Box>
                    {searchTerm ? (
                        <List  spacing={"1px"}  boxShadow="md" position={"absolute"}  bg={"grey"} width={[width/2,width]} height="300px"
                               overflow="auto" zIndex="9999"  sx={{
                            "&::-webkit-scrollbar": scrollbarStyles,
                            "&::-webkit-scrollbar-thumb": hoverStyles,
                            "&::-webkit-scrollbar-thumb:hover": hoverStyles,
                        }} >
                            {searchResults?.movies?.map((result) => (
                                <ListItem padding={"2px"} bg={"white"} key={result.id} onClick={() =>
                                    navigate(`/Couch_Potatoes/movie/details/${result.id}`)}>
                                    <Stack
                                        direction={"row"} overflowX={"auto"} _hover={{cursor: "pointer"}}>
                                        {(result?.posterPath) ? (<Image maxHeight={"80px"}
                                                                        src={getPosterImageUri(result?.posterPath)}
                                                                        alt={"poster of movie" + result.title}
                                                                        borderRadius='lg'
                                        />) : (<Image maxHeight={"80px"}
                                                      maxWidth={"53px"}
                                                      src={Background_Temp}
                                                      alt={"no poster of movie" + result.title}
                                                      borderRadius='lg'
                                        />)}
                                        <Flex alignItems={"center"}>
                                            <Text>{result.title}</Text>
                                        </Flex>

                                    </Stack>

                                </ListItem>
                            ))}
                        </List>) : null}

                </Box>
            </VStack>
        </>
    )
}