import { Container, Group, Paper, Text } from "@mantine/core";
import { GoogleButton } from "./GoogleButton.tsx";

function Login() {
  return (
    <>
      <Container my={40} size={420}>
        <Paper withBorder shadow="md" p={30} mt={30} radius={"md"}>
          <Text size="lg" fw={400}>
            Welcome to BuyBetter, Please login with
          </Text>
          <Group mb="md" mt="md">
            <a href="http://127.0.0.1:3030/v1/auth/google">
              <GoogleButton radius="xl">Google</GoogleButton>
            </a>
          </Group>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
