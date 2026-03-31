/**
 * One-Page Resume PDF Template - 2026 Design
 * Compact, ATS-friendly, professional single-page resume
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
// COLOR PALETTE
// ─────────────────────────────────────────────────────
const PRIMARY = "#0f172a";
const DARK = "#1e293b";
const MEDIUM = "#475569";
const LIGHT = "#64748b";
const ACCENT_BG = "#f8fafc";
const BORDER = "#cbd5e1";
const DIVIDER = "#e2e8f0";

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 40,
    paddingRight: 40,
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.4,
    color: DARK,
    backgroundColor: "#ffffff",
  },

  // ── HEADER ──
  header: {
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: PRIMARY,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: PRIMARY,
    letterSpacing: 0.3,
    marginBottom: 3,
  },
  role: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: MEDIUM,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    alignItems: "center",
  },
  contactItem: {
    fontSize: 8,
    color: MEDIUM,
  },
  contactSep: {
    fontSize: 8,
    color: BORDER,
    marginHorizontal: 1,
  },

  // ── SECTIONS ──
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: PRIMARY,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
    paddingBottom: 4,
    borderBottomWidth: 1.5,
    borderBottomColor: PRIMARY,
  },

  // ── SKILLS ──
  skillsContainer: {
    flexDirection: "row",
    gap: 14,
  },
  skillColumn: {
    flex: 1,
  },
  skillGroup: {
    marginBottom: 5,
  },
  skillGroupTitle: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: PRIMARY,
    marginBottom: 2,
    letterSpacing: 0.2,
  },
  skillItems: {
    fontSize: 8,
    color: MEDIUM,
    lineHeight: 1.4,
  },

  // ── EXPERIENCE ──
  experienceEntry: {
    marginBottom: 10,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  expCompany: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  expDuration: {
    fontSize: 8,
    color: LIGHT,
    fontFamily: "Helvetica-Oblique",
  },
  expRole: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: MEDIUM,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 2,
  },
  bulletDot: {
    fontSize: 8,
    color: PRIMARY,
    marginRight: 6,
    marginTop: 0.5,
  },
  bulletText: {
    fontSize: 8,
    color: MEDIUM,
    lineHeight: 1.4,
    flex: 1,
  },

  // ── PROJECTS ──
  projectEntry: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 8,
    color: MEDIUM,
    lineHeight: 1.3,
    marginBottom: 3,
  },
  techLine: {
    fontSize: 7.5,
    color: PRIMARY,
    fontFamily: "Helvetica-Bold",
  },

  // ── EDUCATION ──
  eduEntry: {
    marginBottom: 6,
  },
  eduHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  eduSchool: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  eduYear: {
    fontSize: 8,
    color: LIGHT,
    fontFamily: "Helvetica-Oblique",
  },
  eduDegree: {
    fontSize: 8.5,
    color: MEDIUM,
  },

  // ── FOOTER ──
  footer: {
    position: "absolute",
    bottom: 18,
    left: 40,
    right: 40,
    borderTopWidth: 0.5,
    borderTopColor: DIVIDER,
    paddingTop: 6,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 7,
    color: BORDER,
  },
});

// ─────────────────────────────────────────────────────
// RESUME DOCUMENT
// ─────────────────────────────────────────────────────
interface ResumeTemplateProps {
  data: CVData;
}

export function ResumeTemplate({ data }: ResumeTemplateProps) {
  const topSkills = data.skills.slice(0, 4);
  const topProjects = data.projects.slice(0, 2);
  const topExperience = data.experience.slice(0, 2);

  const skillsPerColumn = Math.ceil(topSkills.length / 2);
  const col1 = topSkills.slice(0, skillsPerColumn);
  const col2 = topSkills.slice(skillsPerColumn);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ─── HEADER ─── */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.role}>{data.role}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{data.email}</Text>
            <Text style={styles.contactSep}>|</Text>
            <Text style={styles.contactItem}>{data.phone}</Text>
            <Text style={styles.contactSep}>|</Text>
            <Text style={styles.contactItem}>{data.location}</Text>
            {data.github && (
              <>
                <Text style={styles.contactSep}>|</Text>
                <Text style={styles.contactItem}>{data.github}</Text>
              </>
            )}
            {data.linkedin && (
              <>
                <Text style={styles.contactSep}>|</Text>
                <Text style={styles.contactItem}>{data.linkedin}</Text>
              </>
            )}
          </View>
        </View>

        {/* ─── TECHNICAL SKILLS ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skillColumn}>
              {col1.map((skill, i) => (
                <View key={i} style={styles.skillGroup}>
                  <Text style={styles.skillGroupTitle}>{skill.category}</Text>
                  <Text style={styles.skillItems}>
                    {skill.items.join("  |  ")}
                  </Text>
                </View>
              ))}
            </View>
            {col2.length > 0 && (
              <View style={styles.skillColumn}>
                {col2.map((skill, i) => (
                  <View key={i} style={styles.skillGroup}>
                    <Text style={styles.skillGroupTitle}>{skill.category}</Text>
                    <Text style={styles.skillItems}>
                      {skill.items.join("  |  ")}
                    </Text>
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
            {topExperience.map((exp, i) => (
              <View key={i} style={styles.experienceEntry}>
                <View style={styles.expHeader}>
                  <Text style={styles.expCompany}>{exp.company}</Text>
                  <Text style={styles.expDuration}>{exp.duration}</Text>
                </View>
                <Text style={styles.expRole}>{exp.role}</Text>
                {exp.achievements.slice(0, 3).map((ach, j) => (
                  <View key={j} style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>-</Text>
                    <Text style={styles.bulletText}>{ach}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* ─── FEATURED PROJECTS ─── */}
        {topProjects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Projects</Text>
            {topProjects.map((project, i) => (
              <View key={i} style={styles.projectEntry}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDesc}>
                  {project.description.length > 180
                    ? project.description.substring(0, 180) + "..."
                    : project.description}
                </Text>
                <Text style={styles.techLine}>
                  Technologies: {project.technologies.slice(0, 5).join("  |  ")}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* ─── EDUCATION ─── */}
        {data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, i) => (
              <View key={i} style={styles.eduEntry}>
                <View style={styles.eduHeader}>
                  <Text style={styles.eduSchool}>{edu.school}</Text>
                  <Text style={styles.eduYear}>{edu.year}</Text>
                </View>
                <Text style={styles.eduDegree}>
                  {edu.degree} - {edu.field}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* ─── FOOTER ─── */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            {data.name}  |  One-Page Resume  |  ATS-Optimized
          </Text>
        </View>
      </Page>
    </Document>
  );
}

// Viewer wrapper for debugging
export function ResumeTemplateViewer({ data }: ResumeTemplateProps) {
  return (
    <PDFViewer width="100%" height="600px">
      <ResumeTemplate data={data} />
    </PDFViewer>
  );
}
