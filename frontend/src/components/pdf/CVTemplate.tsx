/**
 * Professional CV PDF Template - 2026 Design
 * Modern, clean, ATS-friendly with professional styling
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import type { CVData } from "@/data/cv-data";

// ─────────────────────────────────────────────────────
// STYLES - Modern 2026 professional design
// ─────────────────────────────────────────────────────
const PRIMARY_COLOR = "#0f172a"; // Slate 900
const DARK_TEXT = "#1e293b"; // Slate 800
const LIGHT_TEXT = "#475569"; // Slate 600
const ACCENT_GRAY = "#f1f5f9"; // Slate 100
const BORDER_COLOR = "#e2e8f0"; // Slate 200

const styles = StyleSheet.create({
  page: {
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.5,
    color: DARK_TEXT,
    backgroundColor: "#ffffff",
  },

  // Header Section - Modern with left accent bar
  header: {
    marginBottom: 28,
    paddingBottom: 16,
    borderBottomWidth: 3,
    borderBottomColor: PRIMARY_COLOR,
  },

  name: {
    fontSize: 28,
    fontWeight: 900,
    marginBottom: 4,
    color: DARK_TEXT,
    letterSpacing: -0.5,
  },

  role: {
    fontSize: 13,
    color: PRIMARY_COLOR,
    fontWeight: 700,
    marginBottom: 11,
    letterSpacing: 0.3,
  },

  contactInfo: {
    display: "flex",
    flexDirection: "row",
    fontSize: 9.5,
    color: LIGHT_TEXT,
    gap: 14,
    flexWrap: "wrap",
    fontWeight: 500,
  },

  // Section Container with modern styling
  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: 900,
    color: DARK_TEXT,
    marginBottom: 10,
    marginTop: 6,
    letterSpacing: 1,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: PRIMARY_COLOR,
    textTransform: "uppercase",
  },

  // Summary
  summary: {
    fontSize: 10.5,
    lineHeight: 1.6,
    color: LIGHT_TEXT,
    textAlign: "justify",
    marginBottom: 2,
  },

  // Skills Section - Modern grid layout
  skillsGrid: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
    marginBottom: 8,
  },

  skillCategory: {
    flex: 1,
    marginBottom: 8,
  },

  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 800,
    color: PRIMARY_COLOR,
    marginBottom: 6,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },

  skillItem: {
    fontSize: 9.5,
    color: LIGHT_TEXT,
    marginBottom: 3.5,
    lineHeight: 1.4,
    fontWeight: 500,
  },

  // Projects with modern spacing
  project: {
    marginBottom: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },

  projectTitle: {
    fontSize: 11.5,
    fontWeight: 800,
    color: DARK_TEXT,
    marginBottom: 3,
    letterSpacing: -0.2,
  },

  projectDescription: {
    fontSize: 9.5,
    color: LIGHT_TEXT,
    marginBottom: 4,
    lineHeight: 1.5,
    textAlign: "justify",
  },

  projectTech: {
    fontSize: 8.5,
    color: PRIMARY_COLOR,
    fontWeight: 600,
    marginBottom: 4,
  },

  // Experience with professional formatting
  experienceItem: {
    marginBottom: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },

  companyRole: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    alignItems: "center",
  },

  company: {
    fontSize: 11.5,
    fontWeight: 800,
    color: DARK_TEXT,
    letterSpacing: -0.2,
  },

  duration: {
    fontSize: 9.5,
    color: LIGHT_TEXT,
    fontWeight: 600,
  },

  jobTitle: {
    fontSize: 10.5,
    fontWeight: 700,
    color: PRIMARY_COLOR,
    marginBottom: 6,
  },

  achievement: {
    fontSize: 9.5,
    color: LIGHT_TEXT,
    marginBottom: 3.5,
    marginLeft: 12,
    lineHeight: 1.5,
    fontWeight: 500,
  },

  // Education
  educationItem: {
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },

  school: {
    fontSize: 11.5,
    fontWeight: 800,
    color: DARK_TEXT,
    marginBottom: 3,
    letterSpacing: -0.2,
  },

  degree: {
    fontSize: 10,
    color: PRIMARY_COLOR,
    fontWeight: 700,
    marginBottom: 2,
  },

  degreeField: {
    fontSize: 9.5,
    color: LIGHT_TEXT,
    marginBottom: 2,
    fontWeight: 500,
  },

  year: {
    fontSize: 9,
    color: LIGHT_TEXT,
    fontWeight: 500,
  },

  // Footer
  footer: {
    marginTop: 24,
    fontSize: 8,
    color: "#999",
    textAlign: "center",
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
    paddingTop: 10,
  },
});

// ─────────────────────────────────────────────────────
// CV DOCUMENT COMPONENT
// ─────────────────────────────────────────────────────
interface CVTemplateProps {
  data: CVData;
}

export function CVTemplate({ data }: CVTemplateProps) {
  // Group skills into columns for better layout
  const skillsPerColumn = Math.ceil(data.skills.length / 2);
  const skillsColumn1 = data.skills.slice(0, skillsPerColumn);
  const skillsColumn2 = data.skills.slice(skillsPerColumn);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ─── HEADER ─── */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.role}>{data.role}</Text>
          <View style={styles.contactInfo}>
            <Text>{data.email}</Text>
            <Text>•</Text>
            <Text>{data.phone}</Text>
            <Text>•</Text>
            <Text>{data.location}</Text>
            <Text>•</Text>
            <Text>{data.website}</Text>
            {data.github && (
              <>
                <Text>•</Text>
                <Text>{data.github}</Text>
              </>
            )}
            {data.linkedin && (
              <>
                <Text>•</Text>
                <Text>{data.linkedin}</Text>
              </>
            )}
          </View>
        </View>

        {/* ─── PROFESSIONAL SUMMARY ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>

        {/* ─── CORE COMPETENCIES ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Competencies</Text>
          <View style={styles.skillsGrid}>
            {/* Column 1 */}
            <View style={{ flex: 1 }}>
              {skillsColumn1.map((skill, idx) => (
                <View key={idx} style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>{skill.category}</Text>
                  {skill.items.map((item, itemIdx) => (
                    <Text key={itemIdx} style={styles.skillItem}>
                      → {item}
                    </Text>
                  ))}
                </View>
              ))}
            </View>

            {/* Column 2 */}
            {skillsColumn2.length > 0 && (
              <View style={{ flex: 1 }}>
                {skillsColumn2.map((skill, idx) => (
                  <View key={idx} style={styles.skillCategory}>
                    <Text style={styles.skillCategoryTitle}>
                      {skill.category}
                    </Text>
                    {skill.items.map((item, itemIdx) => (
                      <Text key={itemIdx} style={styles.skillItem}>
                        → {item}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* ─── PROFESSIONAL EXPERIENCE ─── */}
        {data.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>

            {data.experience.map((exp, idx) => (
              <View key={idx} style={styles.experienceItem}>
                <View style={styles.companyRole}>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text style={styles.duration}>{exp.duration}</Text>
                </View>
                <Text style={styles.jobTitle}>{exp.role}</Text>

                {exp.achievements.map((achievement, achIdx) => (
                  <Text key={achIdx} style={styles.achievement}>
                    ✓ {achievement}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* ─── FEATURED PROJECTS ─── */}
        {data.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Projects</Text>

            {data.projects.map((project, idx) => (
              <View key={idx} style={styles.project}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDescription}>
                  {project.description}
                </Text>
                <Text style={styles.projectTech}>
                  <Text style={{ fontWeight: 900 }}>Technologies:</Text>{" "}
                  {project.technologies.join(" • ")}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* ─── EDUCATION ─── */}
        {data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>

            {data.education.map((edu, idx) => (
              <View key={idx} style={styles.educationItem}>
                <Text style={styles.school}>{edu.school}</Text>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.degreeField}>{edu.field}</Text>
                <Text style={styles.year}>{edu.year}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Professional CV | Generated on {new Date().toLocaleDateString()} | {data.website}</Text>
        </View>
      </Page>
    </Document>
  );
}

// Export for viewer (for debugging)
export function CVTemplateViewer({ data }: CVTemplateProps) {
  return (
    <PDFViewer width="100%" height="600px">
      <CVTemplate data={data} />
    </PDFViewer>
  );
}
