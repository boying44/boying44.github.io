import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, "src", "app", "public");
const publicDir = path.join(projectRoot, "public");

const resumeMappings = [
  {
    source: path.join(sourceDir, "BoyingTangResume_09_2025.docx.pdf"),
    target: path.join(publicDir, "resume.pdf"),
  },
  {
    source: path.join(sourceDir, "resume-engineering.pdf"),
    target: path.join(publicDir, "resume-engineering.pdf"),
  },
  {
    source: path.join(sourceDir, "resume-client-facing.pdf"),
    target: path.join(publicDir, "resume-client-facing.pdf"),
  },
];

try {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  for (const { source, target } of resumeMappings) {
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, target);
      console.log(`Copied ${path.basename(source)} to public/`);
    }
  }
  if (
    !fs.existsSync(resumeMappings[0].source) &&
    !fs.existsSync(resumeMappings[1].source)
  ) {
    console.warn(
      "Resume source files not found. Add PDFs to src/app/public/ or public/ for direct download.",
    );
  }
} catch (err) {
  console.error("Error copying resume:", err);
  process.exit(1);
}
