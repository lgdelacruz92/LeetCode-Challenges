SELECT * FROM (
                    SELECT -COLUMNS-
                        FROM zyBookContentSections
                        JOIN CanonicalSections USING(canonical_section_id)
                        JOIN ContentResourceCanonicalSections USING(canonical_section_id)
                        JOIN ContentResources USING(content_resource_id)
                        JOIN ContentResourceTypes USING(resource_type_id)
                        WHERE zybook_id = %s
                        ORDER BY chapter_number, section_number, ordering) AS content_resource_references
                WHERE content_resource_reference IS NOT NULL ORDER BY section_number ASC
                
