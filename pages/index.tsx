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
  Typography,
  IconButton,
  Paper
} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [confirm, setConfirm] = useState(false)
  const [gender, setGender] = useState("Male")
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
    setGender("Male")
    setHobby([])
    setStatus("")
    setNote("")
  }

  const handleDelete = (index: number) => {
    setUsers(prevUsers => prevUsers.filter((user, userIndex) => userIndex !== index));
  };

  return (
    <Box>
      <AppBar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 65,
          }}
        >
          <Typography
            variant='h4'
            sx={{
              fontSize: "3rem",
              alignItems: "center",
              lineHeight: 1.167
            }}
          >
            User profile management System
          </Typography>
        </Box>
      </AppBar>

      <Grid container spacing={3}
        sx={{
          mt: "65px",
          width: "100%"
        }}
      >
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Box
              sx={{
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  letterSpacing: "0.00735em"
                }}
                variant='h4'
              >
                Profile management
              </Typography>
            </Box>

            <Paper
              component="form"
              noValidate
              sx={{
                p: 2,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
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

                <Grid item xs={6}>
                  <TextField
                    // aria-invalid="false"
                    fullWidth
                    id="lastName"
                    label="Last name"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
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

                <Grid item>
                  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Male"
                    name="radio-buttons-group"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <Box
                      sx={{
                        fontFamily: "Helvetica"
                      }}
                    >
                      <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="Etc"
                        control={<Radio />}
                        label="Etc"
                      />
                    </Box>
                  </RadioGroup>
                </Grid>

                <Grid item>
                  <FormLabel id="demo-radio-buttons-group-label">Hobby</FormLabel>
                  <Box>
                    <FormControlLabel
                      value="Game"
                      control={
                        <Checkbox
                          name='hobbys'
                          checked={hobby.includes("Game")}
                          onChange={handleHobbyChange}
                        />
                      }
                      label="Game"
                    />
                    <FormControlLabel
                      value="Music"
                      control={
                        <Checkbox
                          name='hobbys'
                          checked={hobby.includes("Music")}
                          onChange={handleHobbyChange}
                        />
                      }
                      label="Music"
                    />
                    <FormControlLabel
                      value="Craft"
                      control={
                        <Checkbox
                          name='hobbys'
                          checked={hobby.includes("Craft")}
                          onChange={handleHobbyChange}
                        />
                      }
                      label="Craft"
                    />
                    <FormControlLabel
                      value="Reading"
                      control={
                        <Checkbox
                          name='hobbys'
                          checked={hobby.includes("Reading")}
                          onChange={handleHobbyChange}
                        />
                      }
                      label="Reading"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                    <Select
                      fullWidth
                      input={<OutlinedInput label="Status" />}
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <MenuItem value={"Single"}>
                        Single
                      </MenuItem>
                      <MenuItem value={"Married"}>
                        Married
                      </MenuItem>
                      <MenuItem value={"Divorce"}>
                        Divorce
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Note"
                    variant="outlined"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
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
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{
                        ml: 2,
                      }}
                    >
                      SUBMIT
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          {users.map((user, index) => (
            <Box
              key={index}
              sx={{
                pt: 3,
                ':last-child': { paddingBottom: 3 },
              }}
            >
              <Paper
                sx={{
                  p: 2,
                }}
              >
                <Box sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>USER {index + 1}</Typography>
                  <IconButton
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
              </Paper>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box >
  );
}
