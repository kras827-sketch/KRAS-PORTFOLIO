/**
 * Professional CV PDF Template - 2026 Design
 * Modern, clean, ATS-friendly with premium formatting
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Link,
} from "@react-pdf/renderer";
import type { CVData } from "@/data/cv-data";

// ─────────────────────────────────────────────────────
// COLOR PALETTE - Professional slate theme
// ─────────────────────────────────────────────────────
const PRIMARY = "#0f172a";     // Slate 900
const DARK = "#1e293b";        // Slate 800
const MEDIUM = "#475569";      // Slate 600
const LIGHT = "#64748b";       // Slate 500
const ACCENT = "#f8fafc";      // Slate 50
const BORDER = "#cbd5e1";      // Slate 300
const DIVIDER = "#e2e8f0";     // Slate 200
const LINK_BLUE = "#2563eb";   // Blue 600

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 48,
    paddingRight: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
    color: DARK,
    backgroundColor: "#ffffff",
  },

  // ── HEADER ──
  header: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: PRIMARY,
  },
  name: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: PRIMARY,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  role: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: MEDIUM,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    alignItems: "center",
  },
  contactItem: {
    fontSize: 9,
    color: MEDIUM,
  },
  contactSep: {
    fontSize: 9,
    color: BORDER,
    marginHorizontal: 2,
  },

  // ── SECTIONS ──
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: PRIMARY,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomWidth: 1.5,
    borderBottomColor: PRIMARY,
  },

  // ── SUMMARY ──
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    color: MEDIUM,
    textAlign: "justify",
  },

  // ── SKILLS ──
  skillsGrid: {
    flexDirection: "row",
    gap: 20,
  },
  skillColumn: {
    flex: 1,
  },
  skillGroup: {
    marginBottom: 10,
  },
  skillGroupTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: PRIMARY,
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  skillList: {
    fontSize: 9,
    color: MEDIUM,
    lineHeight: 1.5,
  },

  // ── EXPERIENCE ──
  experienceEntry: {
    marginBottom: 14,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  expCompany: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  expDuration: {
    fontSize: 9,
    color: LIGHT,
    fontFamily: "Helvetica-Oblique",
  },
  expRole: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: MEDIUM,
    marginBottom: 5,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
    paddingLeft: 2,
  },
  bulletDot: {
    fontSize: 9,
    color: PRIMARY,
    marginRight: 8,
    marginTop: 1,
  },
  bulletText: {
    fontSize: 9,
    color: MEDIUM,
    lineHeight: 1.5,
    flex: 1,
  },

  // ── PROJECTS ──
  projectEntry: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 3,
  },
  projectDesc: {
    fontSize: 9,
    color: MEDIUM,
    lineHeight: 1.5,
    textAlign: "justify",
    marginBottom: 4,
  },
  projectTechRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  techPill: {
    fontSize: 8,
    color: PRIMARY,
    backgroundColor: ACCENT,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: DIVIDER,
  },

  // ── EDUCATION ──
  eduEntry: {
    marginBottom: 10,
  },
  eduSchool: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 2,
  },
  eduDegree: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: MEDIUM,
  },
  eduField: {
    fontSize: 9,
    color: LIGHT,
  },
  eduYear: {
    fontSize: 8.5,
    color: LIGHT,
    fontFamily: "Helvetica-Oblique",
    marginTop: 1,
  },

  // ── DIVIDER ──
  sectionDivider: {
    borderBottomWidth: 0.5,
    borderBottomColor: DIVIDER,
    marginBottom: 14,
  },

  // ── FOOTER ──
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: DIVIDER,
    paddingTop: 8,
  },
  footerText: {
    fontSize: 7.5,
    color: BORDER,
  },
});

// ─────────────────────────────────────────────────────
// CV DOCUMENT
// ─────────────────────────────────────────────────────
interface CVTemplateProps {
  data: CVData;
}

export function CVTemplate({ data }: CVTemplateProps) {
  const skillsPerColumn = Math.ceil(data.skills.length / 2);
  const col1 = data.skills.slice(0, skillsPerColumn);
  const col2 = data.skills.slice(skillsPerColumn);

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
            <Text style={styles.contactSep}>|</Text>
            <Text style={styles.contactItem}>{data.website}</Text>
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

        {/* ─── PROFESSIONAL SUMMARY ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>

        {/* ─── CORE COMPETENCIES ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Competencies</Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillColumn}>
              {col1.map((skill, i) => (
                <View key={i} style={styles.skillGroup}>
                  <Text style={styles.skillGroupTitle}>{skill.category}</Text>
                  <Text style={styles.skillList}>
                    {skill.items.join("  |  ")}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.skillColumn}>
              {col2.map((skill, i) => (
                <View key={i} style={styles.skillGroup}>
                  <Text style={styles.skillGroupTitle}>{skill.category}</Text>
                  <Text style={styles.skillList}>
                    {skill.items.join("  |  ")}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* ─── PROFESSIONAL EXPERIENCE ─── */}
        {data.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {data.experience.map((exp, i) => (
              <View key={i} style={styles.experienceEntry}>
                <View style={styles.expHeader}>
                  <Text style={styles.expCompany}>{exp.company}</Text>
                  <Text style={styles.expDuration}>{exp.duration}</Text>
                </View>
                <Text style={styles.expRole}>{exp.role}</Text>
                {exp.achievements.map((ach, j) => (
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
        {data.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Projects</Text>
            {data.projects.map((project, i) => (
              <View key={i} style={styles.projectEntry}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDesc}>{project.description}</Text>
                <View style={styles.projectTechRow}>
                  {project.technologies.map((tech, j) => (
                    <Text key={j} style={styles.techPill}>{tech}</Text>
                  ))}
                </View>
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
                <Text style={styles.eduSchool}>{edu.school}</Text>
                <Text style={styles.eduDegree}>{edu.degree}</Text>
                <Text style={styles.eduField}>{edu.field}</Text>
                <Text style={styles.eduYear}>{edu.year}</Text>
              </View>
            ))}
          </View>
        )}

        {/* ─── FOOTER ─── */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>{data.name} - Curriculum Vitae</Text>
          <Text style={styles.footerText}>{data.website}</Text>
        </View>
      </Page>
    </Document>
  );
}

// Viewer wrapper for debugging
export function CVTemplateViewer({ data }: CVTemplateProps) {
  return (
    <PDFViewer width="100%" height="600px">
      <CVTemplate data={data} />
    </PDFViewer>
  );
}
