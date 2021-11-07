import {
  TextField,
  Paper,
  Typography,
  Box,
  Button,
  FormControl,
  FormHelperText,
  useTheme,
} from "@mui/material";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import SaveIcon from "@mui/icons-material/Save";
import { blue, grey } from "@mui/material/colors";
import { bytesToSize } from "../../helpers/units";

interface FormData {
  title: string;
  description: string;
  files: FileList | null;
}

const GameNewPage: React.FC = () => {
  const {
    handleSubmit,
    control,
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { title: "", description: "", files: null },
  });
  const theme = useTheme();
  watch("files");
  const files = useRef<HTMLInputElement | null>(null);
  const { ref: filesRef, ...filesRest } = register("files", { required: true });
  const onSubmit = () => {};
  const formControlStyle = {
    mb: 2,
  };
  const currentFiles = getValues("files");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper sx={{ display: "flex", flexDirection: "column", p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">게임 생성</Typography>
        </Box>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              error={!!errors.title}
              label="게임 제목"
              variant="outlined"
              helperText={errors.title && "게임 제목을 입력해주세요."}
              sx={formControlStyle}
              {...field}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              label="게임 설명"
              variant="outlined"
              sx={formControlStyle}
              multiline
              rows={4}
              {...field}
            />
          )}
        />
        <FormControl sx={formControlStyle}>
          <input
            type="file"
            style={{ display: "none" }}
            {...filesRest}
            ref={(e) => {
              filesRef(e);
              files.current = e;
            }}
            accept="audio/mp3,audio/*;capture=microphone"
          />
          <Button
            variant="contained"
            startIcon={<QueueMusicIcon />}
            color="info"
            onClick={() => {
              if (files.current) {
                files.current.value = "";
                files.current.click();
              }
            }}
          >
            음악 파일 업로드
          </Button>
          {errors.files && (
            <FormHelperText sx={{ mt: 1 }} error>
              음악 파일을 업로드해야 합니다.
            </FormHelperText>
          )}
        </FormControl>
        {currentFiles && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              mb: 2,
              border: `${theme.spacing(1 / 8)} solid ${grey[300]}`,
            }}
          >
            <Typography sx={{ mb: 1, color: grey[700] }}>
              업로드 파일 목록
            </Typography>
            {getValues("files") &&
              Array.from(getValues("files")!).map((file) => (
                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  key={file.name}
                >
                  <Typography variant="body2" sx={{ color: blue[800] }}>
                    {file.name} ({bytesToSize(file.size)})
                  </Typography>
                </Box>
              ))}
          </Box>
        )}
        <Button
          variant="contained"
          type="submit"
          color="success"
          startIcon={<SaveIcon />}
        >
          저장
        </Button>
      </Paper>
    </form>
  );
};

export default GameNewPage;
