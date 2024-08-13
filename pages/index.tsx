import { Inter } from "next/font/google";
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  OutlinedInput,
  MenuItem,
  Select,
  Card,
  CardContent,
  Typography,
  IconButton
} from '@mui/material';
import '@fontsource/roboto/400.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [confirm, setConfirm] = useState(false)
  const [gender, setGender] = useState("male")
  const [hobby, setHobby] = useState<string[]>([])
  const [status, setStatus] = useState("")
  const [note, setNote] = useState("")

  const handleHobbyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedHobby = event.target.value;
    setHobby((prevHobbies) =>
      event.target.checked
        ? [...prevHobbies, selectedHobby]
        : prevHobbies.filter((h) => h !== selectedHobby)
    );
  };

  const handleSubmit = async () => {
    const newUser = {
      name,
      lastName,
      email,
      confirm,
      gender,
      hobby,
      status,
      note
    }
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log(newUser)
  }

  const handleReset = async () => {
    setName("")
    setLastName("")
    setEmail("")
    setConfirm(false)
    setGender("male")
    setHobby([])
    setStatus("")
    setNote("")
  }

  const handleDelete = (index: number) => {
    setUsers(prevUsers => prevUsers.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <AppBar position="static" sx={{ height: 65, textAlign: "center" }}>
        <Typography sx={{ fontSize: "3rem", alignItems: "center" }} variant="h3" component="h2">User profile management System</Typography>
      </AppBar>

      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} md={5} sx={{ p: 3 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontSize: 34, textAlign: "center", mb: 3 }}
          >
            Profile management
          </Typography>
          <Card >
            <CardContent>
              <Box component="form" noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      id="outlined-basic"
                      name="email"
                      fullWidth
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="Confirm PDPA"
                            checked={confirm}
                            onChange={(e) => setConfirm(e.target.checked)}
                          />
                        }
                        label="Confirm PDPA"
                      />
                    </FormGroup>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="male"
                      name="radio-buttons-group"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <Box>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="etc" control={<Radio />} label="Etc" />
                      </Box>
                    </RadioGroup>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <FormLabel id="demo-radio-buttons-group-label">Hobby</FormLabel>
                    <Box>
                      <FormControlLabel
                        value="game"
                        control={<Checkbox checked={hobby.includes("game")} onChange={handleHobbyChange} />}
                        label="Game"
                      />
                      <FormControlLabel
                        value="music"
                        control={<Checkbox checked={hobby.includes("music")} onChange={handleHobbyChange} />}
                        label="Music"
                      />
                      <FormControlLabel
                        value="craft"
                        control={<Checkbox checked={hobby.includes("craft")} onChange={handleHobbyChange} />}
                        label="Craft"
                      />
                      <FormControlLabel
                        value="reading"
                        control={<Checkbox checked={hobby.includes("reading")} onChange={handleHobbyChange} />}
                        label="Reading"
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        fullWidth
                        input={<OutlinedInput label="Status" />}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value={"single"}>Single</MenuItem>
                        <MenuItem value={"married"}>Married</MenuItem>
                        <MenuItem value={"divorce"}>Divorce</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      label="Note"
                      variant="outlined"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} sx={{ mt: 2 }}>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}>
                      <Button
                        variant="contained"
                        onClick={handleReset}
                      >
                        RESET
                      </Button>
                      <Button
                        variant="contained" onClick={handleSubmit}
                        sx={{
                          ml: 2
                        }}
                      >
                        SUBMIT
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={7} sx={{ p: 1 }}>
          {users.map((user, index) => (
            <Card key={index} sx={{ my: 2 }}>
              <CardContent >
                <Box sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>USER {index + 1}</Typography>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
                <Grid container spacing={1} >
                  <Grid item xs={6}>
                    <Typography>
                      Name: {user.name || user.lastName ? `${user.name || ''} ${user.lastName || ''}` : '-'}

                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>Email: {user.email || "-"}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>Gender: {user.gender}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>Hobby: {user.hobby.join(", ") || "-"}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>Status: {user.status || "-"}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>Note: {user.note || "-"}</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <FormGroup>
                      <FormControlLabel
                        disabled
                        control={<Checkbox checked={user.confirm} />}
                        label="Confirm PDPA"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
