/**
 * One-Page Resume PDF Template - 2026 Design
 * Modern, concise, ATS-friendly with professional styling
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
// STYLES - Modern 2026 professional resume
// ─────────────────────────────────────────────────────
const PRIMARY_COLOR = "#0055CC";
const DARK_TEXT = "#1a1a1a";
const LIGHT_TEXT = "#4a5568";
const BORDER_COLOR = "#e0e7ff";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 38,
    paddingRight: 38,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
    color: DARK_TEXT,
    backgroundColor: "#ffffff",
  },

  // Header - Modern concise design
  header: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: PRIMARY_COLOR,
  },

  name: {
    fontSize: 22,
    fontWeight: 900,
    marginBottom: 2,
    color: DARK_TEXT,
    letterSpacing: -0.4,
  },

  role: {
    fontSize: 11,
    color: PRIMARY_COLOR,
    fontWeight: 700,
    marginBottom: 6,
    letterSpacing: 0.3,
  },

  contactInfo: {
    display: "flex",
    flexDirection: "row",
    fontSize: 8.5,
    color: LIGHT_TEXT,
    gap: 10,
    flexWrap: "wrap",
    fontWeight: 500,
  },

  // Section - Compact and clean
  section: {
    marginBottom: 11,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: 900,
    color: DARK_TEXT,
    marginBottom: 6,
    letterSpacing: 0.8,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: PRIMARY_COLOR,
    textTransform: "uppercase",
  },

  // Skills Grid - 2 columns, compact
  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },

  skillColumn: {
    flex: 1,
  },

  skillCategory: {
    marginBottom: 6,
  },

  skillCategoryTitle: {
    fontSize: 8.5,
    fontWeight: 800,
    color: PRIMARY_COLOR,
    marginBottom: 3,
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },

  skillItem: {
    fontSize: 8.5,
    color: LIGHT_TEXT,
    marginBottom: 1.5,
    lineHeight: 1.2,
    fontWeight: 500,
  },

  // Projects - Compact
  project: {
    marginBottom: 8,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },

  projectTitle: {
    fontSize: 10,
    fontWeight: 800,
    color: DARK_TEXT,
    marginBottom: 1.5,
    letterSpacing: -0.2,
  },

  projectDescription: {
    fontSize: 8.5,
    color: LIGHT_TEXT,
    marginBottom: 2,
    lineHeight: 1.3,
  },

  projectTech: {
    fontSize: 7.5,
    color: PRIMARY_COLOR,
    fontWeight: 600,
  },

  // Experience - Compact and impactful
  experienceItem: {
    marginBottom: 8,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },

  companyRole: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1.5,
    alignItems: "center",
  },

  company: {
    fontSize: 10.5,
    fontWeight: 800,
    color: DARK_TEXT,
    letterSpacing: -0.2,
  },

  duration: {
    fontSize: 8.5,
    color: LIGHT_TEXT,
    fontWeight: 600,
  },

  jobTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: PRIMARY_COLOR,
    marginBottom: 3,
  },

  achievement: {
    fontSize: 8.5,
    color: LIGHT_TEXT,
    marginBottom: 1.5,
    marginLeft: 10,
    lineHeight: 1.3,
    fontWeight: 500,
  },

  // Education - Compact
  educationItem: {
    marginBottom: 6,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },

  school: {
    fontSize: 10,
    fontWeight: 800,
    color: DARK_TEXT,
    marginBottom: 1,
    letterSpacing: -0.2,
  },

  degree: {
    fontSize: 9,
    color: PRIMARY_COLOR,
    fontWeight: 700,
  },

  degreeField: {
    fontSize: 8.5,
    color: LIGHT_TEXT,
    fontWeight: 500,
  },

  year: {
    fontSize: 8,
    color: LIGHT_TEXT,
    fontWeight: 500,
    marginTop: 1,
  },

  // Footer
  footer: {
    marginTop: 12,
    fontSize: 7,
    color: "#999",
    textAlign: "center",
    borderTopWidth: 1,
    borderTopColor: BORDER_COLOR,
    paddingTop: 6,
  },
});

// ─────────────────────────────────────────────────────
// RESUME DOCUMENT
// ─────────────────────────────────────────────────────
interface ResumeTemplateProps {
  data: CVData;
}

export function ResumeTemplate({ data }: ResumeTemplateProps) {
  // Take top 3 skills categories and 2 projects for resume
  const topSkills = data.skills.slice(0, 3);
  const topProjects = data.projects.slice(0, 2);
  const topExperience = data.experience.slice(0, 2);

  // Split skills for two columns
  const skillsPerColumn = Math.ceil(topSkills.length / 2);
  const skillsColumn1 = topSkills.slice(0, skillsPerColumn);
  const skillsColumn2 = topSkills.slice(skillsPerColumn);

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
          </View>
        </View>

        {/* ─── TECHNICAL SKILLS ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsContainer}>
            {/* Column 1 */}
            <View style={styles.skillColumn}>
              {skillsColumn1.map((skill, idx) => (
                <View key={idx} style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>{skill.category}</Text>
                  {skill.items.slice(0, 5).map((item, itemIdx) => (
                    <Text key={itemIdx} style={styles.skillItem}>
                      → {item}
                    </Text>
                  ))}
                </View>
              ))}
            </View>

            {/* Column 2 */}
            {skillsColumn2.length > 0 && (
              <View style={styles.skillColumn}>
                {skillsColumn2.map((skill, idx) => (
                  <View key={idx} style={styles.skillCategory}>
                    <Text style={styles.skillCategoryTitle}>
                      {skill.category}
                    </Text>
                    {skill.items.slice(0, 5).map((item, itemIdx) => (
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
        {topExperience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>

            {topExperience.map((exp, idx) => (
              <View key={idx} style={styles.experienceItem}>
                <View style={styles.companyRole}>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text style={styles.duration}>{exp.duration}</Text>
                </View>
                <Text style={styles.jobTitle}>{exp.role}</Text>

                {exp.achievements.slice(0, 3).map((achievement, achIdx) => (
                  <Text key={achIdx} style={styles.achievement}>
                    ✓ {achievement}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* ─── FEATURED PROJECTS ─── */}
        {topProjects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Projects</Text>

            {topProjects.map((project, idx) => (
              <View key={idx} style={styles.project}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDescription}>
                  {project.description.length > 140
                    ? project.description.substring(0, 140) + "..."
                    : project.description}
                </Text>
                <Text style={styles.projectTech}>
                  <Text style={{ fontWeight: 700 }}>Tech:</Text> {project.technologies.slice(0, 4).join(" • ")}
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
          <Text>Professional Resume | Generated {new Date().toLocaleDateString()} | ATS-Friendly</Text>
        </View>
      </Page>
    </Document>
  );
}

// Export for viewer (for debugging)
export function ResumeTemplateViewer({ data }: ResumeTemplateProps) {
  return (
    <PDFViewer width="100%" height="600px">
      <ResumeTemplate data={data} />
    </PDFViewer>
  );
}
