import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
const users = [
  { name: "charlie", age: 31 },
  { name: "errin", age: 31 },
  { name: "chase", age: 31 },
];
const UserSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 960px;
  width: 100%;
  flex-direction: column;
  /* margin: 25px; */
  /* padding: 15px 10px; */
`;
const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  max-width: 275px;
  width: 100%;
  padding: 15px auto;

  input {
    width: 350px;
    padding: 10px 10px;
    font-size: 1rem;
    color: #fff;
    margin: 15px 0;
    border: 1px solid #fff;
    border-radius: 4px;
    background: #a0a0a0;

    &:focus {
      outline: none;
      border: 1px solid #0ff;
    }

    &::placeholder {
      color: #a0a0a0;
      opacity: 0.5;
    }
  }
`;
const FoundUser = styled.h6`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 275px;
  width: 100%;
  padding: 10px auto;
  margin: 5px 0;
  text-transform: uppercase;
  background: #121127;
  color: #0ff;
  font-size: 1rem;
  font-weight: semi-bold;
`;

const FoundUserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px auto;
  margin: 10px 0;
  border-bottom: 1px solid #fff;

  background: #121127;
  color: #fff;
  font-size: 1rem;
  width: 350px;
  padding: 10px 10px;
`;

const Spacer = styled.div`
  height: 1rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #fff;
  margin: 20px 0 0 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  button {
    padding: 10px 20px;
    margin: 10px 0;
    border: 1px solid #fff;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    color: #fff;

    &:hover {
      transform: scale(1.05);
      transition: all 0.3s ease;
      background: #0ff;
      color: #121127;
      border: none;
    }
  }
`;

const UserSeach: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <UserSearchContainer>
      <SearchInputContainer>
        <LabelWrapper>User Search</LabelWrapper>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search..."
        />
        <ButtonWrapper>
          <button onClick={onClick}>Search Guest</button>
        </ButtonWrapper>
      </SearchInputContainer>
      <Spacer />
      <LabelWrapper>User User List</LabelWrapper>
      <FoundUserListContainer>
        {user && (
          <FoundUser>
            {user.name}
            <Spacer />
            {user.age}
          </FoundUser>
        )}
      </FoundUserListContainer>
    </UserSearchContainer>
  );
};

export default UserSeach;
