SELECT
  customers.Id AS customerId,
  customers.name,
  GROUP_CONCAT(subjects.subjectName, ', ') AS subjects
FROM
  customers
  JOIN subject_student_mapping ON customers.id = subject_student_mapping.customerId
  JOIN subjects ON subject_student_mapping.subjectId = subjects.subjectId
GROUP BY
  customers.id,
  customers.name
ORDER BY
  customers.id ASC
